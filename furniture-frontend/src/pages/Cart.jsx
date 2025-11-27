import { useState } from "react";
import { CartContext } from "../context/CartContext";


function Cart() {
  const { cart } =useContext(CartContext);

  const total = cart.reduce((sum,item) =>sum+item.price,o);

  return(
    <div style={{padding:"20px"}}>
      <h2>Yoir Cart 🛒</h2>

      {cart.length ===0 ? (
        <p>No item in Cart</p>
      ) : (
        <div>
        {cart.map((item,index) => (
          <div key={index} style={{borderBottom:"1px solid #ccc",padding:"10px"}}>
           <h3>{item.name}</h3>
           <p>price: ₹{item.price}</p>
          </div>
         ))}
        <h2>Toatl:₹{total}</h2>
       </div>
  )}
  </div>
  );
}

export default Cart;
