import "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FlexBoxRow, FlexBoxCol } from "@/components/styled/styled";
import { useTonConnect } from "@/hooks/ton/useTonConnect";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import telegramLogo from "@/assets/telegram.png";
import { WalletInfo } from "@/components/ui/wallet/WalletInfo";
import { UserCard } from "@/components/ui/user/UserCard";
import { TestInvoiceButton } from "@/components/ui/payment/PaymentButton";
import { useTelegramApp } from "@/providers/TelegramAppContext";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

export const Home = () => {
  const { wallet, connected } = useTonConnect();
  const { lastInvoice } = useTelegramApp();

  return (
    <FlexBoxCol>
      <FlexBoxRow>
        <SectionHeader>Vite + React + TWA</SectionHeader>
      </FlexBoxRow>

      <FlexBoxRow>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://core.telegram.org/bots/webapps" target="_blank">
          <img
            src={telegramLogo}
            className="logo telegram"
            alt="Telegram logo"
          />
        </a>
        <a
          href="https://github.com/Telegram-Mini-Apps/TelegramUI"
          target="_blank"
        >
          <img
            alt="Telegram sticker"
            src="https://xelene.me/telegram.gif"
            className="logo tgui"
          />
        </a>
      </FlexBoxRow>
      <FlexBoxRow>
        <TonConnectButton />
      </FlexBoxRow>
      {wallet && connected && (
        <FlexBoxRow>
          <WalletInfo address={wallet} />
        </FlexBoxRow>
      )}
      <FlexBoxRow>
        <UserCard />
      </FlexBoxRow>
      <FlexBoxRow>
        <TestInvoiceButton />
      </FlexBoxRow>
      <FlexBoxRow>
        <p>Last invoice: {JSON.stringify(lastInvoice?.url)}</p>
        <p>Status: {lastInvoice?.status}</p>
      </FlexBoxRow>
    </FlexBoxCol>
  );
};
