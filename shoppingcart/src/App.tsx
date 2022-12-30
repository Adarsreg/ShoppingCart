import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
//here are the components
import { Drawer } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import Badge from '@mui/material/Badge';

//styles here
import { Wrapper, Styledbutton } from "./Appstyles";

//don't need to rerender hence its outside APP

//first await for the fetch and the other one for convertingit to json
//Types
//query is used here to receive the data from the fake api 
export type Shopitemtype = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getpro = async (): Promise<Shopitemtype[]> => await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const [cartopen, setcartopen] = useState(false);
  const [cartitems, setcartitems] = useState([] as Shopitemtype[]);

  const { data, isLoading, error } = useQuery<Shopitemtype[]>('products', getpro
  );
  console.log(data)


  const carttotal = (items: Shopitemtype[]) => null;
  const cartadd = (clicky: Shopitemtype) => null;
  const cartremove = () => null;

  if (isLoading) return <LinearProgress />;

  if (error) return <div> Error encountered </div>;

  //'?'cuzitmay be undefined
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartopen} onClick={() => setcartopen(false)}>
        Uzi paisa chaina
      </Drawer>
      <Styledbutton onClick={() => setcartopen(true)}>
        <Badge badgeContent={carttotal(cartitems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>

      </Styledbutton>
      <Grid container spacing={3}>

        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} cartadd={cartadd} />
          </Grid>
        )
        )}
      </Grid>
    </Wrapper>
  );
};

export default App;