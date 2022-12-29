import { useState } from "react";
import { useQuery } from "react-query";

//here are the components
import Drawer from '@mui/material/Drawer'
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import { Wrapper } from "./Appstyles";

//don't need to rerender hence its outside APP

//first await for the fetch and the other one for convertingit to json
//Types

export type Shopitemtype = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getproducts = async (): Promise<Shopitemtype> => await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const { data, isLoading, error } = useQuery<Shopitemtype[]>('products', getproducts);
  console.log(data)
  return <div className="App">
    Hello world im back
  </div>
}

export default App;