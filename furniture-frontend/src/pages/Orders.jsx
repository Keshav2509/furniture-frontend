import React,{useContext, useEffect,useState} from "react";
import { CartContext } from "../context/CartContext";


const Orders =() =>{
    const orders= JSON.parse(localStorage.getItem("orders")) || [];
    const {addToCart} =useContext(CartContext);
    const cancelOrder = (id) =>{
        const updated =orders.filter((order) => order.id !==id);
        localStorage.setItem("orders",JSON.stringify(updated));
        window.location.reload();
    };

    const reorder=(items) =>{
        items.forEach((items) => addToCart(items));
        alert("Item added back to cart");
    };

    const downloadInvoice = (order) => {
        const text=`
        
    Invoice
    ----------------------------------
    Order ID:${order.id}
    Name:${order.name}
    Phone:${order.phone}
    Address:${order.address}
    payment:${order.paymentMode}
    Date:${order.date}
    Total:₹${oredr.total}
    ----------------------------------
    Item:
    ${order.cart.map((i) =>'${i.name} × ${i.quantity} - ₹{i.price}.join("/n')}
    ----------------------------------
    THANK YOU!
    
    `;
        const blob=new Blob([text],{type:"text/plain"});
        const link=document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download='${order.id}.txt';
        link.click();
    };
   
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">My  Orders</h1>
            {orders.length === 0 ? <p>No orders found.</p>:null}

            {orders.map((order,index) =>(
                <div key={index} className="border p-4 mb-4 rounded">
                    <h2>Order #{index +1} - <b>{order.id}</b> </h2>
                    <p><b>Status:</b>{order.status}</p>
                    <p><b>Name:</b>{order.name}</p>
                    <p><b>Phone:</b>{order.phone}</p>
                    <p><b>Address:</b>{order.address}</p>
                    <p><b>Payment:</b>{order.paymentMode}</p>
                    <p><b>Date:</b>{order.date}</p>
                    <p><b>Total:</b>₹{order.total}</p>
                    <br />
                    <b>Item:</b>
                    <ul>
                        {order.cart.map((item,i) => (
                            <li key={i}>• {item.name} × {item.quantity} -₹{item.price}</li>
                        ))}
                    </ul>
                    <br />
                    <button on onClick={() => reorder(order.cart)} className="bg-blue-500 text-white px-3 py-1 mr-2">Re-Order</button>
                    <button on onClick={() => cancelOrder(order.id)} className="bg-blue-500 text-white px-3 py-1 mr-2">Cancle</button>
                    <button on onClick={() => downloadInvoice(order)} className="bg-blue-500 text-white px-3 py-1 mr-2">Invoice</button>
                    </div>

            ))}
        </div>
    );           
};

export default Orders;