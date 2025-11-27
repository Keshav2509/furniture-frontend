import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { image } from "framer-motion/client";
import sofa from "../assets/images/sofa.jpg";
import study from "../assets/images/study.jpg";
import dining from "../assets/images/dining.jpg"



export default function Products() {

  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id:1,
      name:"wooden Sofa",
      price:12999,
      image:sofa,
      Description:"Comfortable 3-seater sofa with premium fabric."
    },
    {
      id:2,
      name:"",
      price:9999,
      image:study,
      description:"Best metirial Dinning Table."
    },
    {
      id:3,
      name:"",
      price:5999,
      image:dining,
      description:"Wooden Study Chair."
    }
  ];
  return(
    <div style={{ padding:"20px"}}>
      <h2>Products</h2>
      <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border:"1px solid #aaa",
              padding:"10px",
              width:"220px",
              borderRadius:"10px"
            }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{width:"100%",height:"150px",objectFit:"cover"}}
              />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p style={{ fontsize:"13px"}}>{item.description}</p>
            </div>
        ))}
      </div>
      <button onClick={() => addToCart(products)}>Add To Cart</button>
    </div>
  );
}