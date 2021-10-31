import { useHistory } from "react-router";
import { LogoStyled } from "./styled";

const Logo = () => {
    const history = useHistory()

    return (
        <div onClick={()=> history.push("/")}>
            <LogoStyled>Burguer <span>Kenzie</span></LogoStyled>
        </div>
    )
};

export default Logo;