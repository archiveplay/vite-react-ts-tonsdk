import { describe, it, expect } from "vitest";
import { toNano, fromNano } from "./ton";

describe("TON utils", () => {
  it("converts TON to nanoTON correctly", () => {
    expect(toNano(1)).toBe(1000000000n);
    expect(toNano(0.5)).toBe(500000000n);
  });

  it("converts nanoTON to TON correctly", () => {
    expect(fromNano(1000000000n)).toBe(1);
    expect(fromNano(2500000000n)).toBe(2.5);
  });

  it("is reversible", () => {
    const val = 3.1415;
    expect(fromNano(toNano(val))).toBe(val);
  });
});

