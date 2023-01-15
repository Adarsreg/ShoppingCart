import CartItem from "../CartItem/Cartitem";

import { Wrapper } from "./Cartstyles";

import { Shopitemtype } from "../App";

type Props = {
    cartItems: Shopitemtype[];
    cartadd: (clickeditem: Shopitemtype) => void;
    cartremove: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, cartadd, cartremove }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    cartadd={cartadd}
                    cartremove={cartremove}
                />
            ))}
        </Wrapper>
    );
};

export default Cart;