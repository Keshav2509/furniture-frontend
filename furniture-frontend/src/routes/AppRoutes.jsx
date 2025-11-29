import { Routes, Route} from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

function AppRoutes() {
    return (
       
        <Routes>
           
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-success" element={<OrderSuccess/>}/>
        </Routes>
      
        );
}

export default AppRoutes;