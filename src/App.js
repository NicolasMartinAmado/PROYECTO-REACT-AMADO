import Navbar from "./components/navbar";
import messi from "./assets/img/messi-camiseta_862x485.webp";
import Like from "./components/itemlistcontainer";
import body from "./components/navbar.css"
import Icon from "./components/CartWidget";
import Button from "./components/Boton";
import SumarAlCarrito from "./components/ItemCount";
import Layout from "./components/layout";
import PageDetail from "./components/Pages/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Useauth from "./components/hooks/LogIn";
import Pageproductos from "./components/Pages/producto";
import inicio from "./components/Pages/detail";



function App() {
  return (  
        <>
    
        <BrowserRouter> 
        <Layout>
        
        <Useauth/>
      
        <Routes> 
     <Route path="/" element={<PageDetail/>} />  
     <Route path="/producto" element={<Pageproductos/>}  />    
        </Routes>
        </Layout>
        </BrowserRouter>
        
        </>
     
    
  );

}

export default App;
