import { Card, FlexBoxCol, FlexBoxRow } from "@/components/styled/styled";
import { useWalletBalances } from "@/hooks/ton/useWalletBalances";
import { Text } from "@telegram-apps/telegram-ui";

export const WalletInfo = ({ address }: { address: string }) => {
  const { ton, jettons, tonLoading, jettonsLoading } =
    useWalletBalances(address);

  if (!address) return <p>No wallet connected</p>;
  if (tonLoading || jettonsLoading) return <p>Loading...</p>;

  return (
    <Card>
      <FlexBoxCol>
        <FlexBoxRow>
          <Text>Ton: {ton}</Text>
        </FlexBoxRow>
        {jettons?.map(({ jetton, balance }) => (
          <FlexBoxRow key={jetton.symbol}>
            <Text>
              {jetton.symbol}: {balance}
            </Text>
          </FlexBoxRow>
        ))}
      </FlexBoxCol>
    </Card>
  );
};
