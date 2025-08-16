export const toNano = (value: number): bigint => {
  return BigInt(Math.floor(value * 1e9));
};

export const fromNano = (value: bigint): number => {
  return Number(value) / 1e9;
};

