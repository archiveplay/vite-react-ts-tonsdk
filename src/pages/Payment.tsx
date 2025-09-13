import { sendPayout } from "@/api/back";
import { FlexBoxRow } from "@/components/styled/styled";
import TopUpWrapper from "@/components/ui/payment/TopUpWrapper";
import { usePayment } from "@/hooks/ton/useWalletBalances";
import { useBalance } from "@/hooks/user/useBalance";
import { CurrencyType } from "@/types/payment";
import {
  Button,
  Divider,
  Input,
  List,
  Select,
  Text,
} from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";
import { useState } from "react";

export const Payment = () => {
  const [invoice, setInvoice] = useState<{ id: number } | null>(null);
  const [amount, setAmount] = useState(0.5);
  const [currency, setCurrency] = useState("USDT");

  const paymentStatusQuery = usePayment(invoice);

  const { data } = useBalance([paymentStatusQuery.data?.status]);

  const onTopUpHandler = (data: any) => {
    setInvoice(data);
    WebApp.openTelegramLink(data.mini_app_invoice_url);
    paymentStatusQuery.refetch();
  };

  const payout = async () => {
    const r = await sendPayout(amount, currency);
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

      <Divider />

      <FlexBoxRow>
        <Input
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          header="Amount"
          placeholder="amount of payout"
        />
        <List
          style={{
            width: 240,
            background: "var(--tgui--secondary_bg_color)",
          }}
        >
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            header="Select"
          >
            {Object.values(CurrencyType).map((currency) => (
              <option value={currency}>{currency}</option>
            ))}
          </Select>
        </List>
      </FlexBoxRow>

      <Button mode="filled" size="m" onClick={payout}>
        PayOut
      </Button>
    </>
  );
};
