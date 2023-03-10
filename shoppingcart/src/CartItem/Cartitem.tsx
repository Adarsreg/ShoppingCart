import { Button } from "@mui/material";
//types

import { Shopitemtype } from "../App";


//styles
import { Wrapper } from "./Cartitemstyles";
import Item from "../Item/Item";

type Props = {
    item: Shopitemtype;
    cartadd: (clickedItem: Shopitemtype) => void;
    cartremove: (id: number) => void;

}

const Cartitem: React.FC<Props> = ({ item, cartadd, cartremove }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: Rs.{(item.price * 80).toFixed(0)}</p>
                <p>Total: Rs.{(item.amount * item.price * 80).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => cartremove(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => cartadd(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />


    </Wrapper>
);


export default Cartitem;