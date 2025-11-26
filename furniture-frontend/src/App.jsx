import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <main className="pt-6">
        <AppRoutes/>
      </main> 
    </BrowserRouter>
  );
}
