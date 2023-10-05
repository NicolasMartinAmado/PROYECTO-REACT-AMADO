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

import Pageproductos from "./components/Pages/producto";
import Pageinicio from "./components/Pages/inicio"



function App() {
  return (  
        <>
        <BrowserRouter> 
        <Layout>
        <Routes> 
     <Route path="/" element={<Pageinicio/>} />  
     <Route path="/producto" element={<Pageproductos/>}  />  
     <Route path="/producto/:productoId" element={<PageDetail/>}  />    
        </Routes>
        </Layout>
        </BrowserRouter>
        </> 
  );

}

export default App;
