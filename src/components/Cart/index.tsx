import {
    Box,
    Modal,
    Badge
} from '@material-ui/core';

import {
    ShoppingCart,
    Close
} from '@material-ui/icons';

import { useState } from 'react';
import { useCartContext } from '../../providers/cart';
import { CardProductCart } from '../Card';
import {
    CartModal,
    CartModalHeader,
    CartModalMain,
    CartModalFooter,
    IconButton
} from './styled';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        cart,
        clearCart,
    } = useCartContext();

    const totalValue = () => {
        let total: number = 0;

        cart.forEach(prod => {
            total += prod.price*prod.amount;
        });

        return total;
    };

    const totalProduct = () => {
        let total: number = 0;

        cart.forEach(prod => {
            total += prod.amount
        });

        return total;
    };

    return (
        <div>
            <IconButton onClick={() => handleOpen()}>
                <Badge badgeContent={totalProduct()} color="primary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <CartModal>
                        <CartModalHeader>
                            <h4>Carrinho de compras</h4>
                            <IconButton onClick={()=> handleClose()}>
                                <Close />
                            </IconButton>
                        </CartModalHeader>
                        <CartModalMain>
                            {cart.length !== 0?
                                <ul>
                                    {cart.map(product => CardProductCart(product))}
                                </ul>
                                :
                                <div>
                                    <h3>Sua sacola está vazia</h3>
                                    <p>Adicione itens</p>
                                </div>
                            }
                        </CartModalMain>
                        {cart.length !== 0 &&
                            <CartModalFooter>
                                <div className="totalValue">
                                    <p>Total</p>
                                    <p className="price">R$ {totalValue().toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        clearCart();
                                    }}
                                >
                                    Remover todos
                                </button>
                            </CartModalFooter>
                        }
                    </CartModal>
                </Box>
            </Modal>
        </div>
    );
}

export default Cart;