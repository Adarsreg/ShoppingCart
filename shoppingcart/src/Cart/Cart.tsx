import CartItem from "../CartItem/Cartitem";

import { Wrapper } from "./Cartstyles";

import { Shopitemtype } from "../App";

type Props = {
    cartItems: Shopitemtype[];
    cartadd: (clickeditem: Shopitemtype) => void;
    cartremove: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, cartadd, cartremove }) => {
    const calculateTotal = (items: Shopitemtype[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
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
            <h2>Total:Rs.{(calculateTotal(cartItems) * 80).toFixed(2)} </h2>
        </Wrapper>
    );
};

export default Cart;