
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageproductos from "./components/Pages/producto";
import Pageinicio from "./components/Pages/inicio"
import PageContacto from "./components/Pages/contact";
import { Cartcontextprovider } from "./context/cartcontext";
import Cartview from "./components/cart/Cartview";
import Item from "./components/itemlistcontainer/item";
import Checkout from "./components/checkout/checkout";

function App() {
  

  return (  
        <>    
      <Cartcontextprovider> 
        <BrowserRouter> 
        <Routes> 
     <Route path="/" element={<Pageinicio/>}  />  
     <Route path="/producto" element={<Pageproductos/>}  />  
     <Route path="/item" element = {<Item/>} />
     <Route path="/contacto" element={<PageContacto/>}  /> 
     <Route path="/cart" element={<Cartview/>}/> 
     <Route path="/Checkout" element={<Checkout/>}  /> 
        </Routes>
        </BrowserRouter>
        </Cartcontextprovider>
        </> 
  );

}

export default App;
