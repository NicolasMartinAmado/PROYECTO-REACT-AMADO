import Navbar from "./components/navbar";
import messi from "./assets/img/messi-camiseta_862x485.webp";
import Like from "./components/itemlistcontainer";
import body from "./components/navbar.css"
import Icon from "./components/CartWidget";
import Button from "./components/button";
import SumarAlCarrito from "./components/ItemCount";


function App() {
  return (  
        <>


        <Navbar />
        <Like />
        <Button id= "Boton" text = "TOCA AQUI" type="Submit"  />
   
        <SumarAlCarrito/>
        
        </>
     
    
  );

}

export default App;