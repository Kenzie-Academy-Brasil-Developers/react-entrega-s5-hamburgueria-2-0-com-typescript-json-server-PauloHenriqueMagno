import { useHistory } from "react-router";
import {
    Header,
    HeaderContainer,
    IconButton,
    SearchButton,
    SearchForm,
    OpenSearch
} from "./styled";

import {
    ExitToApp,
    Search
} from "@material-ui/icons";

import Logo from "../Logo";
import { toast } from "react-toastify";
import Cart from "../Cart";
import { useCartContext } from "../../providers/cart";
import { useMenuContext } from "../../providers/menu";
import { useState } from "react";

const HeaderComponent = () => {
    const history = useHistory();

    const [ isFocus, setIsFocus ] = useState(false)
    const { setCart } = useCartContext()
    const { SearchMenu } = useMenuContext()

    const redirect = (string: string) => {
        history.push(string);
    };

    const logout = () => {
        redirect("/login");
        setCart([]);
        const token = localStorage.getItem("@BurguerKenzie:token");
        if(!!token){
            localStorage.removeItem("@BurguerKenzie:token");
            toast.info("Conta desconectada");
        };
    };

    return (
        <Header>
            <HeaderContainer className={isFocus? "search": ""}>
                <div className="hiddenOnFocus">
                    <Logo />
                </div>
                <nav>
                    <SearchForm
                        className="searchForm"
                        onSubmit={(e)=> {
                            setIsFocus(false);
                            e.preventDefault()
                        }}
                    >
                        <input
                            placeholder="Digitar pesquisa"
                            onChange={(e)=> SearchMenu(e.currentTarget.value)}
                        />
                        <SearchButton
                            type="submit"
                        >
                            <Search />
                        </SearchButton>
                    </SearchForm>
                    <OpenSearch
                        className="hiddenOnFocus mobile"
                        onClick={()=> setIsFocus(true)}
                    >
                        <Search />    
                    </OpenSearch>
                    <div className="hiddenOnFocus">
                        <Cart />
                    </div>
                    <IconButton
                        className="hiddenOnFocus"
                        onClick={() => logout()}
                    >
                        <ExitToApp />
                    </IconButton>
                </nav>
            </HeaderContainer>
        </Header>
    );
};

export default HeaderComponent;