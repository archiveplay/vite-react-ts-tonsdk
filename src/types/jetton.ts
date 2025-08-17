export type JettonItem = {
  jetton: {
    symbol: string;
    decimals?: number;
  };
  balance: string | number; // в API иногда приходит как строка
};

export type Balances = JettonItem[];
