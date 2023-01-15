import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
//here are the components
import Cart from "./Cart/Cart";
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
  const [cartItems, setcartItems] = useState([] as Shopitemtype[]);

  const { data, isLoading, error } = useQuery<Shopitemtype[]>('products', getpro
  );
  console.log(data)


  const carttotal = (items: Shopitemtype[]) => items.reduce((ack: number, item) =>
    ack + item.amount, 0);
  const cartadd = (clicky: Shopitemtype) => {
    setcartItems(prev => {
      const isIteminCart = prev.find(item => item.id === clicky.id);

      if (isIteminCart) {
        return prev.map(item =>
          item.id === clicky.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clicky, amount: 1 }];
    });
  };
  const cartremove = (id: number) => {
    setcartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];

        } else {
          return [...ack, item];
        }
      }, [] as Shopitemtype[])
    );
  };

  if (isLoading) return <LinearProgress />;

  if (error) return <div> Error encountered </div>;

  //'?'cuzitmay be undefined
  return (
    <Wrapper>

      <Drawer anchor="right" open={cartopen} onClose={() => setcartopen(false)}>
        <Cart cartItems={cartItems} addtocart={cartadd}
          removefromcart={cartremove} />
      </Drawer>
      <Styledbutton onClick={() => setcartopen(true)}>
        <Badge badgeContent={carttotal(cartItems)} color='error'>
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