import { api } from '@/api'

/**
 * Get wallet balance (TON) via TonAPI
 * @param address - wallet address
 * @returns balance in TON
 */
export async function fetchBalance(address: string): Promise<string> {
  const { data } = await api.get(`/accounts/${address}`);
  return data.balance;
}

/**
 * Get Jetton token balance via TonAPI
 * @param address - wallet address
 * @returns list of jetton balances [{ jetton, balance }]
 */
export async function fetchJettonsBalance(address: string) {
  const { data } = await api.get(`/accounts/${address}/jettons`);
  return data.balances;
}

