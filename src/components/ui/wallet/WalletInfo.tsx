import { Card, FlexBoxCol, FlexBoxRow } from "@/components/styled/styled";
import { useWalletBalances } from "@/hooks/ton/useWalletBalances";

export const WalletInfo = ({ address }: { address: string }) => {
  const { ton, jettons, tonLoading, jettonsLoading } = useWalletBalances(address);

  if (!address) return <p>No wallet connected</p>;
  if (tonLoading || jettonsLoading) return <p>Loading...</p>;

  return (
    <Card>
      <FlexBoxCol>
        <FlexBoxRow>Ton balance: {ton}</FlexBoxRow>
        {jettons?.map(({ jetton, balance }) => (
          <FlexBoxRow key={jetton.symbol}>
            {jetton.symbol} balance: {balance}
          </FlexBoxRow>
        ))}
      </FlexBoxCol>
    </Card>
  );
};

