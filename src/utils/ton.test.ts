import { describe, it, expect } from "vitest";
import { fromDecimals, toDecimals } from "@/utils/ton";

describe('fromDecimals', () => {
  it('should convert string values correctly', () => {
    expect(fromDecimals("1000000000", 9)).toBe(1);
    expect(fromDecimals("5000000", 6)).toBe(5);
  });

  it('should convert number values correctly', () => {
    expect(fromDecimals(1000000000, 9)).toBe(1);
    expect(fromDecimals(2500000, 6)).toBe(2.5);
  });
});

describe('toDecimals', () => {
  it('should convert human-readable value to smallest unit', () => {
    expect(toDecimals(1, 9)).toBe("1000000000");
    expect(toDecimals(2.5, 6)).toBe("2500000");
  });

  it('should round values correctly', () => {
    expect(toDecimals(1.23456789, 6)).toBe("1234568"); // rounding
  });
});

