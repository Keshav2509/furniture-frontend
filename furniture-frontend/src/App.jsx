import Navbar from "./components/Navbar";
import RefreshHandler from "./pages/RefreshHandler";
import AppRoutes from "./routes/AppRoutes";
 function App(){
  return(
    <>
    <RefreshHandler/>
      <Navbar/>
      <main className="pt-6">
        <AppRoutes/>
      </main>
    </>
  );
}
export default App;