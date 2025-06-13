export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    redirectPath: string | null;
  }
  
  export interface User {
    email: string;
    password: string;
    otp: string;
  }