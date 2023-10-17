import Navbar from "./components/navbar";
import messi from "./assets/img/messi-camiseta_862x485.webp";
import Like from "./components/itemlistcontainer";
import body from "./components/navbar.css"
import Icon, { carrito } from "./components/CartWidget";
import Button from "./components/Boton";
import SumarAlCarrito from "./components/ItemCount";
import Layout from "./components/layout";
import PageDetail from "./components/Pages/detail";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Pageproductos from "./components/Pages/producto";
import Pageinicio from "./components/Pages/inicio"
import { Spinner } from "react-bootstrap";
import Loading from "./components/spinner";
import LoginInput from "./components/hooks/LogInInput";
import Userdetail from "./components/Pages/userdetail";
import PageContacto from "./components/Pages/contact";
import { Cartcontextprovider, Cartprovider, UserContext } from "./context/cartcontext";
import { useState } from "react";


function App() {

  const { productoId } = useParams()

  return (  
        <>
          
      <Cartcontextprovider>
        <BrowserRouter> 
        <Layout>
        <Routes> 
     <Route path="/" element={<Pageinicio/>}  />  
     <Route path="/producto" element={<Pageproductos/>}  />  
     <Route path="/contacto" element={<PageContacto/>}  />
     <Route path="/producto/:productoId" element={<PageDetail/>}  />   
     <Route path="/detail/:productoId" element={<PageDetail/>}  /> 
        </Routes>
        </Layout>
        </BrowserRouter>
        </Cartcontextprovider>
        </> 
  );

}

export default App;
