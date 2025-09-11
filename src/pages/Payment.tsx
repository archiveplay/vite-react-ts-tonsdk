import { getInvoiceStatus } from "@/api/back";
import TopUpWrapper from "@/components/ui/payment/TopUpWrapper";
import { PaymentStatus } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@telegram-apps/telegram-ui";
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

  const onTopUpHandler = (data: any) => {
    console.log("data", data);
    setInvoice(data);
    WebApp.openTelegramLink(data.mini_app_invoice_url);
    paymentStatusQuery.refetch();
  };

  return (
    <>
      {invoice && (
        <p className="mt-4">
          Статус платежа: {paymentStatusQuery.data?.status ?? "ожидание..."}
        </p>
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
    </>
  );
};
