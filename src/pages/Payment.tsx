import { getInvoiceStatus, sendPayout } from "@/api/back";
import TopUpWrapper from "@/components/ui/payment/TopUpWrapper";
import { useBalance } from "@/hooks/user/useBalance";
import { PaymentStatus } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";
import { Button, Divider, Text } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import { useState } from "react";

type PaymentStatusResponse = {
  status: PaymentStatus;
};

export const Payment = () => {
  const [invoice, setInvoice] = useState<{ id: number } | null>(null);

  const paymentStatusQuery = useQuery<PaymentStatusResponse>({
    queryKey: ["paymentStatus", invoice?.id],
    queryFn: async () => await getInvoiceStatus(invoice!.id),
    enabled: !!invoice,
    retry: false,
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (!status) return 2000;
      if (["paid", "failed", "cancelled"].includes(status)) {
        return false;
      }
      return 2000;
    },
  });
  const { data } = useBalance([paymentStatusQuery.data?.status]);

  const onTopUpHandler = (data: any) => {
    setInvoice(data);
    WebApp.openTelegramLink(data.mini_app_invoice_url);
    paymentStatusQuery.refetch();
  };

  const payout = async () => {
    const r = await sendPayout(0.01);
    console.log("r", r);
  };

  return (
    <>
      {data?.balances &&
        Object.entries(data.balances).map(([currency, amount]) => (
          <>
            <Text>
              {currency}: {amount}
            </Text>
            <Divider />
          </>
        ))}
      {invoice && (
        <Text>
          Статус платежа: {paymentStatusQuery.data?.status ?? "ожидание..."}
        </Text>
      )}
      <TopUpWrapper
        amount={5}
        currency="USDT"
        provider="cryptobot"
        onTopUp={onTopUpHandler}
      >
        <Button mode="filled" size="m">
          Top Up
        </Button>
      </TopUpWrapper>

      <Button mode="filled" size="m" onClick={payout}>
        PayOut
      </Button>
    </>
  );
};
