import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IProvider, IProduct } from "../../type/provider";

interface IMenuProvider{
    menu: IProduct[],
    SearchMenu: (string: string) => void
};

export const MenuContext = createContext<IMenuProvider>({} as IMenuProvider);

export const useMenuContext = () => {
    const context = useContext(MenuContext)

    return context
}

export const MenuProvider = ({children}: IProvider) => {
<<<<<<< Updated upstream
    const [menu, setMenu] = useState<IProduct[]>([]);

    useEffect(()=>{
        api
            .get("/menu")
            .then(response => setMenu(response.data))
            .catch(err => toast.error("Erro em carregar o cardapio"))
    },[])

=======
    const [menu, setMenu] = useState([]);
    const [saveMenu, setSaveMenu] = useState([]);

    const getMenu = () =>{
        api
        .get("/menu")
        .then(response => {
            setMenu(response.data);
            setSaveMenu(response.data);
        })
        .catch(err => toast.error("Erro em carregar o cardapio"));
    };

    const SearchMenu = (string: string) => {
        const filterMenu = saveMenu.filter((prod: IProduct) => 
            prod.name.toLowerCase().includes(string.toLowerCase())
        );

        if(string !== ""){
            setMenu(filterMenu);
        }else{
            setMenu(saveMenu);
        };
    };
    
    useEffect(()=>{
        getMenu();
    },[]);
    
>>>>>>> Stashed changes
    return (
        <MenuContext.Provider value={{ menu, SearchMenu }}>
            {children}
        </MenuContext.Provider>
<<<<<<< Updated upstream
    )
}
=======
    );
};

export const useMenuContext = () => useContext(MenuContext);
>>>>>>> Stashed changes
