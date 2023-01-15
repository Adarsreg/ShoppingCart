import Button from '@mui/material/Button';
// types
import { Wrapper } from './Itemstyles';
import { Shopitemtype } from '../App';





type Props = {
    item: Shopitemtype;
    cartadd: (clicky: Shopitemtype) => void;
}
//type for react functional component

const Item: React.FC<Props> = ({ item, cartadd }) => (

    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>Rs.{(item.price * 80).toFixed(0)}</h3>
        </div>
        <Button onClick={() => cartadd(item)}> Add2cart </Button>
    </Wrapper>
);

export default Item;