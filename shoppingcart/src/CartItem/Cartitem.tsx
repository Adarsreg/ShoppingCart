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

const Cartitem: React.FC<Props> = ({ item, addtocart, removefromcart }) => (
    <Wrapper><div>
        <h3>yo</h3>

    </div>

    </Wrapper>
);


export default Cartitem;