export const PaymentStatus = {
  PENDING: "pending",
  PAID: "paid",
  CANCELLED: "cancelled",
  FAILED: "failed",
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
