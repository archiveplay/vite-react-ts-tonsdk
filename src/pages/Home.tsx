import "@twa-dev/sdk";
import { CHAIN } from "@tonconnect/protocol";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { FlexBoxRow, FlexBoxCol, Button } from '@/components/styled/styled';
import { useTonConnect } from '@/hooks/ton/useTonConnect';
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import telegramLogo from '@/assets/telegram.png'


export const Home = () => {
  const { network } = useTonConnect();
  const userFriendlyAddress = useTonAddress();

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
      <FlexBoxRow>
        <Button>
          {network
            ? network === CHAIN.MAINNET
              ? `mainnet: ${userFriendlyAddress} `
              : `testnet: ${userFriendlyAddress}`
            : "N/A"}
        </Button>
      </FlexBoxRow>
    </FlexBoxCol>
  )
}
