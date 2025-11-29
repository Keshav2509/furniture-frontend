import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Checkout() {
    const navigate=useNavigate();

    
    
    const{ cart ,clearCart} = useContext(CartContext);
    const [form,setForm] = useState({ name:"",phone:"",address:""});

    const total = cart.reduce((acc, item)=> acc +item.price*item.quantity,0);
    const handleSubmit =(e) => {
        e.preventDefault();
        const order={...form,cart,total,date: new Date() };
        localStorage.setItem("order",JSON.stringify(order));
        alert("Order sucessful!");
        clearCart();
        setTimeout(() => navigate("/order-success"),100);
            };
    return(
        <div className="p-6">
            <h1 className="text--3xl font-bold mb-4">Ceheckout</h1>
            {/*FORM*/}
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Full Name"
                className="border p-2 block mb-2"
                value={form.name}
                onChange={(e) => setForm({...form,name:e.target.value})}
            />
            <input 
                type="text"
                placeholder="Phone Number"
                value={form.phone}
                className="border p-2 block mb-2"
                onChange={(e) => setForm({...form,phone:e.target.value})}
            />
            <textarea
                placeholder="Delivery Address"
                value={form.address}
                className="border p-2 block mb-2"
                rows="3"
                onChange={(e) => setForm({...form,address:e.target.value})}
            ></textarea>

            {/*TOTAL*/}

            <p className="text-xl font-semibold mb-4">Total:₹ {total}</p>

            {/*BUTTON*/}

            <button 
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Place Order
            </button>
            
            </form>
            
        </div>
    );
}