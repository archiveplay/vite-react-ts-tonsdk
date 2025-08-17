import { useQuery } from "@tanstack/react-query";
import { fetchBalance, fetchJettonsBalance } from "@/api/ton";
import { fromNano } from "ton-core";
import { fromDecimals } from "@/utils/ton";
import type { Balances } from "@/types/jetton";

const mapJettonBalances = (balances: Balances): Balances => {
  return balances.map((item: any) => ({
    jetton: item.jetton,
    balance: fromDecimals(item.balance, item.jetton.decimals ?? 9),
  }));
}

export function useWalletBalances(address?: string) {
  const tonQuery = useQuery({
    queryKey: ["balance", address],
    queryFn: async () =>
      fromNano(await fetchBalance(address!)),
    enabled: !!address,
  });

  const jettonsQuery = useQuery({
    queryKey: ["jettons", address],
    queryFn: async () =>
      mapJettonBalances(await fetchJettonsBalance(address!)),
    enabled: !!address,
  });

  return {
    ton: tonQuery.data,
    tonLoading: tonQuery.isLoading,
    tonError: tonQuery.error,

    jettons: jettonsQuery.data,
    jettonsLoading: jettonsQuery.isLoading,
    jettonsError: jettonsQuery.error,
  };
}

