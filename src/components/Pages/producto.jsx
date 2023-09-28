import SumarAlCarrito from "../ItemCount";
import Layout from "../layout";


const Pageproductos = ()=>{
    return(
    
<main>
<h1 style={{color:"white", textAlign:"center", padding:80}}>PRODUCTOS</h1>
<section style={{display:"flex", justifyContent:"center"}}  className="PageProductos-ImagenCamisetas"> 
<div style={{display:"flex",justifyContent:"center", width: "100%", height:450}}> 
<img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" alt="" />    
</div><div style={{display:"flex", justifyContent:"center", width: "100%", height:450}}> 
<img src="https://afaar.vtexassets.com/arquivos/ids/156071/Camiseta_Alternativa_Seleccion_Argentina_Femenina_23_Version_Masculina_Negro_IB8536_01_laydown.jpg?v=638188039400830000" alt="" />    
</div><div style={{display:"flex", justifyContent:"center", width: "100%", height:450}} > 
<img src="https://acdn.mitiendanube.com/stores/001/312/744/products/dwretstrdtyfugihjk1-842a89f8d7363dad7916758063369984-640-0.jpg"  alt="" />    

</div>
</section>
<SumarAlCarrito/>
</main>
        
    )
}
export default Pageproductos;