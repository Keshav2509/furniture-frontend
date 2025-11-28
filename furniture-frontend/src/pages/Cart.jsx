import { useState } from "react";
import { CartContext } from "../context/CartContext";
import React,{ useContext } from "react";

function Cart() {
  const { cart } =useContext(CartContext);

  
  
  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Yoir Cart 🛒</h1>

      {cart.length ===0 ? (
        <p>Your Cart is Empty.</p>
      ) : (
        
        cart.map((item,index) => (
          <div key={index} className="flex item-center gap-4 mb-3 border p-3 rounded">
           <img src={item.image} className="h-16"/>
           <div className="flex flex-col">
             <h3 className="font-semibold text-lg">{item.name}</h3>
             <p className="text-gray-700"> ₹ {item.price}</p>
           </div>
          </div>
         ))
      )}
  </div>
  );
}

export default Cart;
