import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IProduct, IProvider } from "../../type/provider";

interface ICart{
    cart: IProduct[],
    setCart: Function,
    loadCart: () => void,
    addToCart: (product: IProduct, message?: boolean) => void,
    removeFromCart: (product: IProduct, message?: boolean) => void,
    clearCart: (message?: boolean) => void,
    removeAmount: (product: IProduct, message?: boolean) => void,
}
interface ISave{
    data: { cart: IProduct[]},
    success?: string,
    error?: string,
    message: boolean
}

const CartContext = createContext<ICart>({} as ICart);

export const CartProvider = ({children}: IProvider) => {
    const [cart, setCart] = useState([]);
    const [id, setId] = useState(localStorage.getItem("@BurguerKenzie:id"));
    const [token, setToken] = useState(localStorage.getItem("@BurguerKenzie:token"));

    useEffect(()=>{
        setId(localStorage.getItem("@BurguerKenzie:id"));
        setToken(localStorage.getItem("@BurguerKenzie:token"));

        loadCart();
    }, []);

    const loadCart = () => {
        api
            .get(`users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setCart(response.data.cart)
            });
    };

    const saveChange = ({data, success, error, message}: ISave ) => {
        api
            .patch(`/users/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                message && toast.success(success);
            })
            .catch(err => {
                message && toast.error(error);
            });
            
        loadCart();
    };

    const addToCart = (product: IProduct, message: boolean = true) => {
        const isThere = cart.some((prod: IProduct) => prod.id === product.id)

        if(isThere){
            const addAmountArray = cart.map((prod: IProduct) => {
                if(prod.id === product.id){
                    prod.amount++
                }
                return prod
            });

            const data = { "cart": addAmountArray };
            saveChange({data: data, success:`${product.name} adicionado`, error: "Erro em adicionar", message})
        }
        else{
            product["amount"] = 1;
            const data = { "cart": [...cart, product] };
            saveChange({data: data, success:`${product.name} adicionado`, error: "Erro em adicionar", message})
        };
    };

    const removeFromCart = (product: IProduct, message: boolean = true) => {
        const data = { "cart": cart.filter((prod: IProduct) => prod.id !== product.id )};

        saveChange({data: data, success:`${product.name} removido`, error: "Erro em remover", message})
    };

    const removeAmount = (product: IProduct, message: boolean = true) => {
        const removeAmountArray = cart.map((prod: IProduct) => {
            if(prod.id === product.id){
                if(prod.amount>1){
                    prod.amount--
                }
            }
            return prod
        });

        const data = { "cart": removeAmountArray };
        saveChange({data: data, success:`Removeu uma unidade de ${product.name}`, error:`Erro em remover uma unidade`, message})
    };

    const clearCart = (message: boolean= true) => {
        const data = { "cart": [] }

        saveChange({data: data, success:"Carrinho esvaziado", error: "Erro em esvaziar o carrinho", message})
    };

    return (
        <CartContext.Provider 
            value={{
                cart,
                setCart,
                loadCart,
                addToCart,
                removeFromCart,
                clearCart,
                removeAmount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);