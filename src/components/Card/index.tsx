import { IProduct } from "../../type/provider"
import { Card, Image } from "./styled"

export const CardProduct = (
    {id, name, src, price, category, amount}: IProduct,
    removable: boolean = false
) => {

    return (
        <Card key={id}>
            <Image>
                <img src={src} alt={name} loading="lazy" />
            </Image>
            <p className="name">{name}</p>
            <p className="category">{category}</p>
            {
                removable?
                <>
                    <p className="price">R$ {(price*amount).toFixed(2)}</p>
                    <button>Remover</button>
                </>
                :
                <>
                    <p className="price">R$ {price.toFixed(2)}</p>
                    <button>Adicionar</button>
                </>
            }
        </Card>
    )
}