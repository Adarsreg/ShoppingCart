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
                <p>Price: Rs.{item.price}</p>
                <p>Total: Rs.{(item.amount * item.price).toFixed(2)}</p>

            </div>
            ]

        </div>

    </Wrapper>
);


export default Cartitem;