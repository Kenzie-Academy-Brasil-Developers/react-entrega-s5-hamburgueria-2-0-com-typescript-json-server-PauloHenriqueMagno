import { useHistory } from "react-router";
import {
    LogoStyled,
    LogoDiv
} from "./styled";

const Logo = () => {
    const history = useHistory()

    return (
        <LogoDiv onClick={()=> history.push("/")}>
            <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
        </LogoDiv>
    )
};

export default Logo;