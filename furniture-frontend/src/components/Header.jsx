import { Link } from "react-router-dom";

export default function Header (){
    return(
        <header className="shodow-md bg-white sticky top-0 z-20">
            <div className="container mx-auto flex justify-between item-center p-4">
                {/*Logo*/}
                <Link to="/" className="text-2xl font-bold">
                    🛠 FurniStore
                </Link>
                {/*navigation*/}
                <nav className="flex gap-6 text-lg">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/products" className="hover:text-blue-600">Products</Link>
                    <Link to="/cart" className="hover:text-blue-600">Cart</Link>
                    <Link to="/login" className="hover:text-blue-600">Login</Link>
                </nav>
            </div>
        </header>
    )
}