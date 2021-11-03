<<<<<<< Updated upstream
=======
import { useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
>>>>>>> Stashed changes
import { CardProduct } from "../../components/Card";
import { useMenuContext } from "../../providers/menu";
import { ProductList } from "./styled";

const Home = () => {
    const { menu } = useMenuContext();
<<<<<<< Updated upstream
=======
    const history = useHistory()
    
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
                .catch(err => {
                    toast.error("Seu token expirou, faça login novamente");
                    localStorage.removeItem("@BurguerKenzie:token");
                    history.push("/login");
                });
        }else{
            history.push("/login")
        }
    }, []);
>>>>>>> Stashed changes

    return (
        <>
            <ProductList>
                {menu?.map(product => CardProduct(product))}
            </ProductList>
        </>
    );
};

export default Home;