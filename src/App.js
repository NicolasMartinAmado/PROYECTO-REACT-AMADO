
import PageDetail from "./components/Pages/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageproductos from "./components/Pages/producto";
import Pageinicio from "./components/Pages/inicio"
import PageContacto from "./components/Pages/contact";
import { CartContext, Cartcontextprovider } from "./context/cartcontext";
import Cartview from "./components/cart/Cartview";
import CartWidget from "./components/navbar/CartWidget";
import Itemdetail from "./components/itemDetailContainer/itemdetail";



function App() {

 

  return (  
        <>
          
      <Cartcontextprovider> 
        <BrowserRouter> 
        <Routes> 
     
     <Route path="/" element={<Pageinicio/>}  />  
     <Route path="/producto" element={<Pageproductos/>}  />  
     <Route path="/producto:01" element = {<Itemdetail/>} />
     <Route path="/contacto" element={<PageContacto/>}  />
     <Route path="/Cartview" element={<Cartview/>}/>  
     <Route path="/cart" element={<Cartview/>}/> 
        </Routes>
        </BrowserRouter>
        </Cartcontextprovider>
        </> 
  );

}

export default App;
