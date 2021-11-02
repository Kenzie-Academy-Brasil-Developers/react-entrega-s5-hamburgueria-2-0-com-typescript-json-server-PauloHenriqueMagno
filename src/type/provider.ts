import { ReactNode } from "react";

export interface IProvider{
    children: ReactNode;
};

export interface IProduct{
    id: number,
    name: string,
    src: string,
    price: number,
    category: string,
    amount?: any
}