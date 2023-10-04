import { click } from "@testing-library/user-event/dist/click";
import SumarAlCarrito from "../ItemCount";
import Layout from "../layout";
import Swal from "sweetalert2";
import products from "../data/producto"
import { useParams } from "react-router-dom";


const Pageproductos = ()=>{

    const ClickBuy = () => {
     

        if(<SumarAlCarrito/>){
            Swal.fire({
                title: 'Estas seguro que quieres agregar este producto a tu Carrito?',
                icon: 'Success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                imageUrl:"" ,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
                confirmButtonText: 'Si'
              }) .then((result) => {
                if (result.isConfirmed) {
                    console.log("Producto agregado al carrito")
                  Swal.fire(
                    'Agregado al carrito',
                    'Tu producto se agrego al carrito correctamente',
                    'success'
                  )
                }
              })
            
        } else {console.error("ERROR")}
    }
    return(
    
<main>
<h1 style={{color:"white", textAlign:"center", padding:80}}>PRODUCTOS</h1>
<section style={{display:"flex", justifyContent:"center"}}  className="PageProductos-ImagenCamisetas"> 
<div  onClick={ClickBuy} style={{display:"flex",justifyContent:"center", width: "100%", height:450}}> 
<img  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" alt="" />     
</div><div onClick={ClickBuy} style={{display:"flex", justifyContent:"center", width: "100%", height:450}}> 
<img src="https://www.ole.com.ar/miscellaneous/bundles/parallax/images/tshirts/tshirt-1994_b.png?cd3aff8;" alt="" />    
</div><div onClick={ClickBuy} style={{display:"flex", justifyContent:"center", width: "100%", height:450}} >
<img src="https://acdn.mitiendanube.com/stores/001/312/744/products/dwretstrdtyfugihjk1-842a89f8d7363dad7916758063369984-640-0.jpg"  alt="" />    </div>
</section>
<section style={{display:"flex", justifyContent:"center"}}  > 
<div  onClick={ClickBuy} style={{display:"flex",justifyContent:"center", width: "100%", height:450}}> 
<img  src="https://www.ole.com.ar/miscellaneous/bundles/parallax/images/tshirts/tshirt-2002_b.png?cd3aff8;" alt="" />     
</div><div onClick={ClickBuy} style={{display:"flex", justifyContent:"center", width: "100%", height:450}}> 
<img src="https://www.ole.com.ar/miscellaneous/bundles/parallax/images/tshirts/tshirt-2006_b.png?cd3aff8;" alt="" />    
</div><div onClick={ClickBuy} style={{display:"flex", justifyContent:"center", width: "100%", height:450}} >
<img src="https://www.ole.com.ar/miscellaneous/bundles/parallax/images/tshirts/tshirt-2018_b.png?cd3aff8;"  alt="" />    </div>
</section>
<SumarAlCarrito/>
</main>
        
    )
}
export default Pageproductos;