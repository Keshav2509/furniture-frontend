export default function ProductCard({title,price,image}) {
    return (
        <div className="border rounded-md p-4 shadow-md hover:scale-105 transition">
            <img src={image} alt={title} className="h-40 w-fu;; object-cover rounded"/>
            <h2 className="text-lg font-semibold mt-3">{title}</h2>
            <p className="text-gray-700 mb-3">₹{price}</p>
            <button className="bg-blue-600 tect-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart 
                </button>"
        </div>
    );
}