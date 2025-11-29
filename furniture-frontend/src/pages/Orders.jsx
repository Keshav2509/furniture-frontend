import React,{useEffect,useState} from "react";

const Orders =() =>{
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        const savedOrders= JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    },[]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>

            {orders.length ===0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order,index) =>(
                    <div 
                        key={index}
                        className="border p-4 mb-4 rounded bg-gray-50"
                    >
                        <p className="font-semibold">order #{index +1}</p>
                        <p><strong>Name:</strong>{order.name}</p>
                        <p><strong>Phone No:</strong>{order.phone}</p>
                        <p><strong>Address:</strong>{order.address}</p>
                        <p><strong>Total Amount:</strong>₹{order.total}</p>
                        <p><strong>Date:</strong>{order.date}</p>
                        <p className="mt-2 font-semibold">Item:</p>
                        <ul className
                    </div>
                ))
            )}
        </div>
    );
};

export default Orders;