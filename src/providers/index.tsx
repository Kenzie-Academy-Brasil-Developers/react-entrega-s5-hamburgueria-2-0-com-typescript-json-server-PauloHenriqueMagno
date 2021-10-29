import { IProvider } from "../type/provider";
import { MenuProvider } from "./menu";

const Providers = ({children}: IProvider) => {
    return (
        <MenuProvider>
            {children}
        </MenuProvider>
    )
};

export default Providers;