import { getBalance } from "@/api/back";
import { BalanceResponse } from "@/api/back/types";
import { useQuery } from "@tanstack/react-query";

export const useBalance = <TDeps extends readonly unknown[]>(deps: TDeps) => {
  return useQuery<BalanceResponse>({
    queryKey: ["balance", ...deps],
    queryFn: getBalance,
    retry: false,
    staleTime: 60_000,
    enabled: true,
  });
};
