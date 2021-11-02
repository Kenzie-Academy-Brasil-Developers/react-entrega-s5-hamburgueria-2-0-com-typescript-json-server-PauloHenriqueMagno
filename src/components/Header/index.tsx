import { useHistory } from "react-router";
import {
    Header,
    HeaderContainer,
    IconButton,
    SearchButton,
    SearchDiv,
} from "./styled";

import {
    ExitToApp,
    Search
} from "@material-ui/icons";

import Logo from "../Logo";
import { toast } from "react-toastify";
import Cart from "../Cart";
import { useCartContext } from "../../providers/cart";

const HeaderComponent = () => {
    const history = useHistory();

    const { setCart } = useCartContext()

    const redirect = (string: string) => {
        history.push(string);
    };

    const logout = () => {
        redirect("/login");
        const token = localStorage.getItem("@BurguerKenzie:token")
        if(!!token){
            localStorage.removeItem("@BurguerKenzie:token");
            toast.info("Conta desconectada");
            setCart([])
        };
    };

    return (
        <Header>
            <HeaderContainer>
                <Logo />
                <nav>
                    <SearchDiv>
                        <input
                            placeholder="Digitar pesquisa"
                        />
                        <SearchButton>
                            <Search />
                        </SearchButton>
                    </SearchDiv>
                    <Cart />
                    <IconButton onClick={() => logout()}>
                        <ExitToApp />
                    </IconButton>
                </nav>
            </HeaderContainer>
        </Header>
    );
};

export default HeaderComponent;