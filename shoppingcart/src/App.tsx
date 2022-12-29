import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
//here are the components
import Drawer from '@mui/material/Drawer'
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

import { Wrapper } from "./Appstyles";

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

const getproducts = async (): Promise<Shopitemtype[]> => await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const { data, isLoading, error } = useQuery<Shopitemtype[]>('products', getproducts
  );
  console.log(data)


  const carttotal = () => null;
  const cartadd = (clicky: Shopitemtype) => null;
  const cartremove = () => null;

  if (isLoading) return <LinearProgress />

  if (error) return <div> Error encountered </div>

  //?cuzitmay be undefined
  return (
    <Wrapper>
      <Grid container spacing={3}>

        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} cartadd={cartadd} />
          </Grid>
        )
        )}
      </Grid>
    </Wrapper>
  )
}

export default App;