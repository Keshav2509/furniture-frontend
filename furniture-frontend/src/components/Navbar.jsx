import { Link } from "react-router-dom";
import { Return } from "three/tsl";

export default function Navbar() {
    return(
        <nav style={{ padding:"15px",borderBottom:"1px solid #ccc"}}>
            <h2 style={{display:"inline",marginRight:"40px"}}>🛠 Furniture 🛠</h2>
            <Link to="/" style={{marginRight:"20px"}}>Home</Link>
            <Link to="/products" style={{marginRight:"20px"}}>Products</Link>
            <Link to="/cart" style={{marginRight:"20px"}}>Cart</Link>
            <Link to="/login" >Login</Link>
        </nav>

    );
}