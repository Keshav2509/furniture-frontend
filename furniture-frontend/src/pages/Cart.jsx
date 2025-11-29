import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
const navigate = useNavigate();
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your Cart is Empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-3 border p-3 rounded">
              <img src={item.image} alt={item.name} className="h-20" />
              <div className="flex flex-col w-full">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-700">₹ {item.price}</p>
                <div className="flex items-center gap-2 my-2">
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-600 underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ₹ {totalPrice}</h2>
          </div>
          <div className="text-right mt-4">
            <button
              onClick={() => navigate('/checkout')}
              className="border px-4 py-2 bg-black text-white rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;