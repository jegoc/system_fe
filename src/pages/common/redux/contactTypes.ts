export interface ContactState {
    user: User | null;
    loading: boolean;
    error: string | null;
    redirectPath: string | null;
  }
  
  export interface User {
    name: string,
    email: string,
    message: string,
  }