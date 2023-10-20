import { useContext, useState } from "react"
import SumarAlCarrito from "./ItemCount"
import { CartContext } from "../../context/cartcontext"
import { Producto } from "../../data/producto"
import { Link } from "react-router-dom"


const Itemdetail = (producto) =>{


    const micontext = useContext(CartContext)
    console.log(micontext.cartList)
    const [quantityAdded, setQuantityadded] = useState(``)


const onAdd = (cantidad) =>{
    console.log(`compraste ${cantidad} de productos`)
setQuantityadded(cantidad)

}

return(

<div>

       <h3>
    Producto: `${producto.name}`
    <p>Stock disponible:`${producto.stock}` </p>
    Descripcion : `${producto.description }`
    <p>Precio : `${producto.precio}`</p>
</h3> 
 
{
    quantityAdded === `` ? <SumarAlCarrito initial = {1} onAdd={onAdd} /> :
    <a href="/cart"></a>
}


</div>


)


}
export default Itemdetail