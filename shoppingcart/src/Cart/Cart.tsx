import CartItem from "../CartItem/Cartitem";

import { Wrapper } from "./Cartstyles";

import { Shopitemtype } from "../App";

type Props = {
    cartItems: Shopitemtype[];
    addtocart: (clickeditem: Shopitemtype) => void;
    removefromcart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addtocart, removefromcart }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem />
            ))}
        </Wrapper>
    )
};

export default Cart;