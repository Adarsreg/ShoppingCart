import Cartitem from "../CartItem/Cartitem";

import { Wrapper } from "./Cartstyles";

import { Shopitemtype } from "../App";

type Props = {
    Cartitems: Shopitemtype[];
    addtocart: (clickeditem: Shopitemtype) => void;
    removefromcart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ Cartitems, addtocart, removefromcart }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {Cartitems.length === 0 ? <p>No items in cart.</p> : null}
            {Cartitems.map(item => (
                <Cartitem />
            ))}
        </Wrapper>
    )
};

export default Cart;