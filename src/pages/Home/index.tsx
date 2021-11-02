import { useEffect } from "react";
import { toast } from "react-toastify";
import { CardProduct } from "../../components/Card";
import { useMenuContext } from "../../providers/menu";
import api from "../../services/api";
import { ProductList } from "./styled";

const Home = () => {
    const { menu } = useMenuContext();
    
    useEffect(() => {
        const id = localStorage.getItem("@BurguerKenzie:id")
        const token = localStorage.getItem("@BurguerKenzie:token")

        if(!!token){
            api
                .get(`users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .catch(err => toast.error("Seu token expirou, faça login novamente"));
        };
    }, []);

    return (
        <>
            <ProductList>
                {menu?.map(product => CardProduct(product))}
            </ProductList>
        </>
    );
};

export default Home;