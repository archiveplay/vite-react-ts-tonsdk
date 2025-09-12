import "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FlexBoxRow, FlexBoxCol } from "@/components/styled/styled";
import { useTonConnect } from "@/hooks/ton/useTonConnect";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import telegramLogo from "@/assets/telegram.png";
import { WalletInfo } from "@/components/ui/wallet/WalletInfo";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { useProfileData } from "@/hooks/user/useProfileData";
import { Avatar, FixedLayout } from "@telegram-apps/telegram-ui";

export const Home = () => {
  const { wallet, connected } = useTonConnect();
  const { data } = useProfileData();

  return (
    <FlexBoxCol>
      <FixedLayout vertical="top">
        <SectionHeader>Vite + React + TWA</SectionHeader>
      </FixedLayout>

      <FlexBoxRow>
        <Avatar size={48} src={data?.user.photo_url} />
        <TonConnectButton />
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
      {wallet && connected && (
        <FlexBoxRow>
          <WalletInfo address={wallet} />
        </FlexBoxRow>
      )}
    </FlexBoxCol>
  );
};
