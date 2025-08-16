/**
 * Get wallet balance (TON) via TonAPI
 * @param address - wallet address
 * @returns balance in TON
 */
export async function fetchBalance(address: string): Promise<number> {
  const res = await fetch(`https://tonapi.io/v2/accounts/${address}`);
  if (!res.ok) {
    throw new Error("Failed to fetch balance");
  }
  const data = await res.json();

  return Number(data.balance) / 1e9;
}

/**
 * Get Jetton token balance via TonAPI
 * @param address - wallet address
 * @returns list of jetton balances [{ jetton, balance }]
 */
export async function fetchJettonsBalance(
  address: string
): Promise<{ jetton: string; balance: number }[]> {
  const res = await fetch(`https://tonapi.io/v2/accounts/${address}/jettons`);
  if (!res.ok) {
    throw new Error("Failed to fetch jettons balance");
  }
  const data = await res.json();

  return data.balances.map((item: any) => ({
    jetton: item.jetton.symbol,
    balance: Number(item.balance) / 10 ** (item.jetton.decimals ?? 9) // 👈 учитываем decimals
  }));
}

