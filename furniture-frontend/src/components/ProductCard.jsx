import { useContext } from "react";
import {CartContext} from "../context/CartContext";



export default function ProductCard({title,price,image}) {

    const { addToCart }=useContext(CartContext);
    const product={title,price,image};


    return (
        <div className="p-4 border rounded-lg text-center">
            <img src={image}  className="h-40 mx-auto"/>
            <h2 className="font-bold mt-2">{title}</h2>
            <p>₹{price}</p>
            <button 
                onClick={() => addToCart(product)}
                className="mt-2 border px-3 py-1"> Add to Cart 
                </button>
        </div>
    );
}