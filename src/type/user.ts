import { IProduct } from "./provider";

export interface UserData{
    id: Number,
    name: string,
    email: string,
    cart: IProduct[],
    orders: IProduct[],
    password: string
};

export interface UserDataAccess{
    accessToken?: string,
    user: UserData
}