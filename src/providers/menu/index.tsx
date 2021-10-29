import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IProvider, IProduct } from "../../type/provider";

interface IMenuProvider{
    menu: IProduct[];
};

export const MenuContext = createContext<IMenuProvider>({} as IMenuProvider);

export const useMenuContext = () => {
    const context = useContext(MenuContext)

    return context
}

export const MenuProvider = ({children}: IProvider) => {
    const [menu, setMenu] = useState<IProduct[]>([]);

    useEffect(()=>{
        api
            .get("/menu")
            .then(response => setMenu(response.data))
            .catch(err => toast.error("Erro em carregar o cardapio"))
    },[])

    return (
        <MenuContext.Provider value={{ menu }}>
            {children}
        </MenuContext.Provider>
    )
}