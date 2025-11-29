import { Link } from "react-router-dom";
import React from "react";

function OrderSuccess() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-green-700">🎉 Order Successful!</h1>
            <p className="text-lg mb-6">Thhank you for your purchase.</p>

            <Link to="/products">
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                    Continue shopping
                </button>
            </Link>
        </div>
    );
}

export default OrderSuccess;