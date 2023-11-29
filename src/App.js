import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageproductos from "./components/Pages/producto";
import Pageinicio from "./components/Pages/inicio";
import PageContacto from "./components/Pages/contact";
import { Cartcontextprovider } from "./context/cartcontext";
import Cartview from "./components/cart/Cartview";

import ProductoDetails from "./components/itemlistcontainer/itemdetail";
import Checkout from "./components/checkout/checkout";

function App() {
 
  return (
    <>
      <Cartcontextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pageinicio />} />
            <Route path="/producto" element={<Pageproductos />} />
            <Route path="/producto/:id" element={<ProductoDetails />} />
            <Route path="/contacto" element={<PageContacto />} />
            <Route path="/cart" element={<Cartview />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </Cartcontextprovider>
    </>
  );
}

export default App;
