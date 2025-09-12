import { CurrencyType, PaymentProvider } from "@/types/payment";

export interface ProfileResponse {
  message: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    photo_url: string;
    last_login: string;
    allows_write_to_pm: boolean;
    balance: number;
  };
}

export interface BalanceResponse {
  balances: Record<keyof typeof CurrencyType, number>;
}

export interface TopUpOption {
  provider: PaymentProvider;
  title: string;
  description: string;
  currency: CurrencyType;
  payload: string;
  amount: number;
}
