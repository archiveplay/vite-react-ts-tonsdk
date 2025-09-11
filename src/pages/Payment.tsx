import { Button } from "@/components/styled/styled";
import TopUpWrapper from "@/components/ui/payment/TopUpWrapper";
import WebApp from "@twa-dev/sdk";

export const Payment = () => {
  const onTopUpHandler = (data: any) => {
    console.log("data", data);
    WebApp.openTelegramLink(data.mini_app_invoice_url);
  };

  return (
    <>
      <TopUpWrapper
        amount={5}
        currency="USDT"
        provider="cryptobot"
        onTopUp={onTopUpHandler}
      >
        <Button>Оплатить</Button>
      </TopUpWrapper>
    </>
  );
};
