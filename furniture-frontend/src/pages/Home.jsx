import ProductCard from "../components/ProductCard";
import sofa from "../assets/images/sofa.jpg";
import study from "../assets/images/study.jpg";
import dining from "../assets/images/dining.jpg"


export default function Home() {
    const products =[
        {title:"Wooden Sofa",price: 12999,image: sofa},
        {title:"Dining Table",price:9999,image:dining},
        {title:"Study chair",price:5999,image:study}
    ];
    return(
        <div className="px-6 py-4">

            <h1 className="text-3xl font-bold mb-6">Best Furniture For Your Home 🏡</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) =>(
                    <ProductCard
                        key={p.title}
                        title={p.title}
                        price={p.price}
                        image={p.image}
                        />
                ))}
            </div>

            <p className="text-gray-600 mb-4">Choose from our primium collection of furniture made with modern design and comfort.</p>
        </div>
    );
}