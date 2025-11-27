import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
 function App(){
  return(
    <>
      <Navbar/>
      <main className="pt-6">
        <AppRoutes/>
      </main>
    </>
  );
}
export default App;