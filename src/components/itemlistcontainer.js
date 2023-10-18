import { useParams } from "react-router-dom"
import SumarAlCarrito from "./ItemCount"
import { useState } from "react"
import { arrayRemove } from "firebase/firestore"

const ItemListContainer = ()=> {
 
  

    if(<SumarAlCarrito/> && `href="/detail/Argtitular2022"` ){

        return (
            <div >
                <div style={{display:"flex",width:"740px",  color: "white", border: "3px white solid", textAlign: "center" }}>
<h3 style={{display:"flex", justifyContent:"center"}}>  Modelo : "Seleccion argentina 2022"
 Precio: $35000
 Stock : 20
 </h3>
<img style={{ width: "100px", height: "100px", alignContent: "center", alignSelf: "center" }} src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" alt="" />
</div>
<button > ELIMINAR </button>
            </div>
        )
    }



}
export default ItemListContainer