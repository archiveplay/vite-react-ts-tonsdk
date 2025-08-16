import { useQuery } from "@tanstack/react-query";
import { fetchBalance, fetchJettonsBalance } from "@/api/ton";

export function useWalletBalances(address?: string) {
  const tonQuery = useQuery({
    queryKey: ["balance", address],
    queryFn: () => fetchBalance(address!),
    enabled: !!address,
  });

  const jettonsQuery = useQuery({
    queryKey: ["jettons", address],
    queryFn: () => fetchJettonsBalance(address!),
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

