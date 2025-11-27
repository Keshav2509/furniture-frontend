import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) =>{
    const [cartitem,setCartItem]=useState([]);

    const addToCart =(product) => {
        setCartItem((prev) => [...prev,product]);
    };

    return(
        <CartContext.Provider value={{cartItem,addToCart}}>
            {children}
        </CartContext.Provider>
    );
};