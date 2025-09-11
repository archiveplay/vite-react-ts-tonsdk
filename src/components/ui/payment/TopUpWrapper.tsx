import { topUpBalance } from "@/api/back";
import { PaymentProvider } from "@/types/payment";

export default function TopUpWrapper({
  children,
  onTopUp,
  amount,
  currency,
  provider,
}: {
  children: React.ReactNode;
  amount: number;
  currency: string;
  provider: PaymentProvider;
  onTopUp: (data: any) => void;
}) {
  const handleTopUp = async () => {
    const data = await topUpBalance({
      amount,
      currency,
      provider,
      title: "Пополнить баланс",
      description: `Пополнить баланс на ${amount} ${currency}`,
      payload: "topupbalance",
    });
    onTopUp(data);
  };

  return <div onClick={handleTopUp}>{children}</div>;
}
