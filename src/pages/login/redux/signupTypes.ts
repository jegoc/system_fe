export interface SignUpState {
    user: User | null;
    loading: boolean;
    error: string | null;
    redirectPath: string | null;
  }
  
  export interface User {
    fname: string,
    mi: string,
    lname: string,
    address: string,
    city: string,
    province: string,
    zip: number,
    cellphone: string,
    email: string,
    password: string,
  }