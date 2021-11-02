import { IProvider } from "../type/provider";
import { CartProvider } from "./cart";
import { MenuProvider } from "./menu";

const Providers = ({children}: IProvider) => {
    return (
        <CartProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </CartProvider>
    )
};

export default Providers;