import { useState } from "react";
import { CartContext } from "../context/CartContext";
import React,{ useContext } from "react";

function Cart() {
  const { cartItem } =useContext(CartContext);

  

  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Yoir Cart 🛒</h1>

      {cartItem.length ===0 ? (
        <p>Your Cart is Empty.</p>
      ) : (
        
        cartItem.map((item,index) => (
          <div key={index} className="flex item-center gap-4 mb-3 border p-3 rounded">
           <img src={item.image} className="h-16"/>
           <h3 className="font-semibold">{item.title}</h3>
           <p>₹ {item.price}</p>
          </div>
         ))
      )}
  </div>
  );
}

export default Cart;
