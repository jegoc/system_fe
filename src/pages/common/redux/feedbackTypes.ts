export interface FeedbackState {
    user: User | null;
    loading: boolean;
    error: string | null;
    redirectPath: string | null;
  }
  
  export interface User {
    rating: number,
    comment: string,
  }