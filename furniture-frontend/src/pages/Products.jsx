import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import (useContext)


export default function Products() {

  const { addToCart } = useContext(CartContext);
  return <h1>Product page</h1>;
}