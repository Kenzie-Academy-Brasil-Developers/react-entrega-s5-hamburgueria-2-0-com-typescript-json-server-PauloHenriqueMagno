import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IProvider, IProduct } from "../../type/provider";

interface IMenuProvider{
    menu: IProduct[];
};

const MenuContext = createContext<IMenuProvider>({} as IMenuProvider);

export const MenuProvider = ({children}: IProvider) => {
    const [menu, setMenu] = useState([]);
    
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
};

export const useMenuContext = () => useContext(MenuContext);