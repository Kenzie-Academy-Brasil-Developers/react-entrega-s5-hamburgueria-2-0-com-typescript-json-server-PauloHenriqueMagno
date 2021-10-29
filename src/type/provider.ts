import { ReactNode } from "react";

export interface IProvider{
    children: ReactNode;
};

export interface IProduct{
    id: string,
    name: string,
    src: string,
    price: any,
    category: string,
    amount?: any
}