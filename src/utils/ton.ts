/**
 * Converts a value from its smallest unit to a human-readable number
 * based on the specified number of decimals.
 *
 * For example:
 * - fromDecimals("1000000000", 9) => 1 (TON)
 * - fromDecimals(1000000, 6) => 1 (USDT)
 *
 * @param {string | number} value - The value in the smallest unit (e.g., nanoTon or nanoJetton)
 * @param {number} decimals - The number of decimal places of the token
 * @returns {number} The converted human-readable value
 */
export const fromDecimals = (value: string | number, decimals: number): number => {
  return Number(value) / Math.pow(10, decimals);
};

/**
 * Converts a human-readable value to its smallest unit
 * based on the specified number of decimals.
 *
 * For example:
 * - toDecimals(1, 9) => 1000000000 (nanoTon)
 * - toDecimals(1, 6) => 1000000 (nanoJetton)
 *
 * @param {number} value - The human-readable value
 * @param {number} decimals - The number of decimal places of the token
 * @returns {string} The value in the smallest unit as a string
 */
export const toDecimals = (value: number, decimals: number): string => {
  return (value * Math.pow(10, decimals)).toFixed(0);
};

