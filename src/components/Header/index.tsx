import { useHistory } from "react-router";
import {
    Header,
    HeaderContainer,
    IconButton,
    SearchButton,
    SearchDiv,
} from "./styled";

import {
    ShoppingCart,
    ExitToApp,
    Search
} from "@material-ui/icons";

import { Badge } from "@material-ui/core";

const HeaderComponent = () => {
    const history = useHistory();

    const redirect = (string: string) => {
        history.push(string)
    }

    return (
        <Header>
            <HeaderContainer>
                <h1 onClick={() => redirect("/")}>Hamburgueria</h1>
                <nav>
                    <SearchDiv>
                        <input
                            placeholder="Digitar pesquisa"
                        />
                        <SearchButton>
                            <Search />
                        </SearchButton>
                    </SearchDiv>
                        <IconButton onClick={() => redirect("/")}>
                            <Badge badgeContent={8} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    <IconButton onClick={() => redirect("/")}>
                        <ExitToApp />
                    </IconButton>
                </nav>
            </HeaderContainer>
        </Header>
    );
};

export default HeaderComponent;