import { IProvider } from "../type/provider";
import { LoginProvider } from "./login";
import { MenuProvider } from "./menu";

const Providers = ({children}: IProvider) => {
    return (
        <LoginProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </LoginProvider>
    )
};

export default Providers;