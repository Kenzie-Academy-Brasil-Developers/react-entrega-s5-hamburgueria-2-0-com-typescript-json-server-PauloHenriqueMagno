import { CardProduct } from "../../components/Card";
import { useMenuContext } from "../../providers/menu";
import { ProductList } from "./styled";

const Home = () => {
    const { menu } = useMenuContext();

    return (
        <>
            <ProductList>
                {menu?.map(product => CardProduct(product))}
            </ProductList>
        </>
    );
};

export default Home;