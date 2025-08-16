import "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FlexBoxRow, FlexBoxCol } from '@/components/styled/styled';
import { useTonConnect } from '@/hooks/ton/useTonConnect';
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import telegramLogo from '@/assets/telegram.png'
import { WalletInfo } from "@/components/ui/wallet/WalletInfo";


export const Home = () => {
  const { wallet, connected } = useTonConnect();

  return (
    <FlexBoxCol>
      <FlexBoxRow>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://core.telegram.org/bots/webapps" target="_blank">
          <img src={telegramLogo} className="logo telegram" alt='Telegram logo' />
        </a>
      </FlexBoxRow>
      <FlexBoxRow>
        <h1>Vite + React + TWA</h1>
      </FlexBoxRow>
      <FlexBoxRow>
        <TonConnectButton />
      </FlexBoxRow>
      {wallet && connected && (
        <FlexBoxRow>
          <WalletInfo address={wallet} />
        </FlexBoxRow>
      )}
    </FlexBoxCol>
  )
}
