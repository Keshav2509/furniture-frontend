import { BrowserRouter,Routes,Route } from "react-router-dom";
import home from '../src/pagesHome.jsx';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:slug" element={<ProductPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>


      </Routes>    
    </BrowserRouter>
  );
}