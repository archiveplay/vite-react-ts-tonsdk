import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchBalance, fetchJettonsBalance } from "./ton";

describe("TON API module", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("fetchBalance returns TON balance", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ balance: 123000000000 }) // 123 TON в nano
    });

    const balance = await fetchBalance("EQC123");
    expect(balance).toBe(123);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://tonapi.io/v2/accounts/EQC123"
    );
  });

  it("fetchBalance throws on error response", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false
    });

    await expect(fetchBalance("EQC123")).rejects.toThrow("Failed to fetch balance");
  });

  it("fetchJettonsBalance returns parsed jettons", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        balances: [
          { jetton: { symbol: "USDT" }, balance: 5000000000 }, // 5 USDT
          { jetton: { symbol: "NOT" }, balance: 42000000000 }  // 42 NOT
        ]
      })
    });

    const jettons = await fetchJettonsBalance("EQC123");
    expect(jettons).toEqual([
      { jetton: "USDT", balance: 5 },
      { jetton: "NOT", balance: 42 }
    ]);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://tonapi.io/v2/accounts/EQC123/jettons"
    );
  });

  it("fetchJettonsBalance throws on error response", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false
    });

    await expect(fetchJettonsBalance("EQC123")).rejects.toThrow(
      "Failed to fetch jettons balance"
    );
  });
});

