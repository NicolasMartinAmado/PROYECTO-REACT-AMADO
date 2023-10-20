import { useContext } from "react"
import Itemdetail from "../itemDetailContainer/itemdetail"
import { CartContext } from "../../context/cartcontext"
import { Link } from "react-router-dom"
import Cartitem from "../cartitem/cartItem"

const Cartview =() => {

const {cartList, clear} = useContext(CartContext)

return(
<div>
{
    cartList.length ? <div>
        {cartList.map((item) => <Cartitem key={item.id} item={item} /> )}
        <p>Total a pagar : $</p>
        <div>
            <button className="btn btn-danger" onClick={clear}>
Vaciar carrito
            </button>
            <Link  className="btn btn-primary" onClick={{}}> </Link>

           
        </div>
    </div> : 
    <><div>tu carrito esta vacio</div>
   <button className="btn btn-primary"> <a  style={{textDecoration:"none"}} href="/producto">Ir a comprar</a> </button>
    </>
}
    </div>

)



}
export default Cartview