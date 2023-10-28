import "../css/prod.css"
import { CartContext } from "../../context/cartcontext"
import { useContext } from "react"

const Item = (props) => {
    const { Id, Description, img, Precio} = props.data

    const {addToCart, cartList}= useContext(CartContext)



    return (
 
       

   
        <><div>
            <div className="imgproducts">  <img id={Id} style={{ width: "380px", height: "400px", objectFit: "cover" }} src={img} /> </div>
            <div className="descrip">
                <div>{Description}</div>
                <p>${Precio}</p>
              

                <button onClick={() => addToCart(Id)}>Add to Cart </button>
            </div>
        </div><>
   

                </></>


    )
   
}

export default Item
