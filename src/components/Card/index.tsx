import { IconButton } from "@material-ui/core";
import {
    Delete,
    Add,
    Remove
} from "@material-ui/icons";
import { useCartContext } from "../../providers/cart";
import { IProduct } from "../../type/provider"
import {
    Card,
    CardCart,
    Image
} from "./styled"

export const CardProduct = (product: IProduct) => {
    const {id, name, src, price, category} = product
    const {
        addToCart
    } = useCartContext();

    return (
        <Card key={id}>
            <Image>
                <img src={src} alt={name} loading="lazy" />
            </Image>
            <h3 className="name">{name}</h3>
            <p className="category">{category}</p>
            <p className="price">
                R$ {price.toFixed(2)}
            </p>
            <button
                onClick={()=> {
                    addToCart(product);
                }}
            >
                Adicionar
            </button>
        </Card>
    );
};

export const CardProductCart = (product: IProduct) => {
    const {id, name, src, price, amount} = product
    const {
        addToCart,
        removeFromCart,
        removeAmount
    } = useCartContext();

    return (
        <CardCart key={id} className="cart">
            <Image className="image">
                <img src={src} alt={name} loading="lazy" />
            </Image>
            <div className="content">
                <div className="nameAndButton">
                    <h3 className="name">{name}</h3>
                    <IconButton
                        onClick={()=> {
                            removeFromCart(product);
                        }}
                    >
                        <Delete />
                    </IconButton>
                </div>

                <div className="amountAndPrice">
                    <div className="buttons">
                        <IconButton
                            onClick={()=> {
                                removeAmount(product, false);
                            }}
                        >
                            <Remove />
                        </IconButton>
                        <p className="amount">
                            {amount}
                        </p>
                        <IconButton
                            onClick={()=> {
                                addToCart(product, false);
                            }}
                        >
                            <Add />
                        </IconButton>
                    </div>
                    <p className="price">
                        R$ {(price*amount).toFixed(2)}
                    </p>
                </div>
            </div>
        </CardCart>
    );
};