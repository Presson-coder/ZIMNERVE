export interface UserRegister {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
}

export interface UserLogin {
    email: string;
    password: string;
}