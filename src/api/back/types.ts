import { CurrencyType, PaymentProvider } from "@/types/payment";

export interface ProfileResponse {
  message: string;
  user: {
    id: number;
    first_name: string;
    username?: string;
    last_login: string;
    role?: string;
    score?: number;
  };
}

export interface TopUpOption {
  provider: PaymentProvider;
  title: string;
  description: string;
  currency: CurrencyType;
  payload: string;
  amount: number;
}
