export const PaymentStatus = {
  PENDING: "pending",
  PAID: "paid",
  CANCELLED: "cancelled",
  FAILED: "failed",
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

export const PaymentProvider = {
  CRYPTOBOT: "cryptobot",
  STARS: "stars",
};

export type PaymentProvider =
  (typeof PaymentProvider)[keyof typeof PaymentProvider];

export const CurrencyType = {
  TON: "TON",
  XTR: "XTR",
  USDT: "USDT",
};

export type CurrencyType = (typeof CurrencyType)[keyof typeof CurrencyType];
