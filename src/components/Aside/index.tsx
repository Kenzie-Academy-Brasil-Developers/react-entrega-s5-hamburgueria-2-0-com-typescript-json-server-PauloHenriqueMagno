import Logo from "../Logo";
import Balls from "./balls"
import ShoppingBag from "./Shopping-bag";

import {
    AsideSection,
    DivMessage
} from "./styled"

const Aside = () => {
    return (
        <AsideSection>
            <Logo />
            <DivMessage>
                <div>
                    <ShoppingBag />
                </div>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.</p>
            </DivMessage>
            <div className="imageDesktop">
                <Balls />
            </div>
        </AsideSection>
    )
};

export default Aside;