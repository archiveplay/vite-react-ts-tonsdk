export interface ProfileResponse {
  message: string;
  user: {
    id: number;
    first_name: string;
    username?: string;
    last_login: string; // т.к. JSON -> string
    role?: string;
    score?: number;
  };
}

