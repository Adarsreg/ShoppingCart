import { Button } from "@mui/material";
//types

import { Shopitemtype } from "../App";


//styles
import { Wrapper } from "./Cartitemstyles";
import Item from "../Item/Item";

type Props = {
    item: Shopitemtype;
    addtocart: (clickedItem: Shopitemtype) => void;
    removefromcart: (id: number) => void;

}
const CartItem: React.FC<Props> = ({ item, addtocart, removefromcart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: Rs.{item.price}</p>
                <p>Total: Rs.{(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation variant='contained'
                    onClick={() => removefromcart(item.id)}>

                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation variant='contained'
                    onClick={() => addtocart(item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)


export default CartItem;