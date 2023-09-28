import { Children } from "react";
import Useauth from "./hooks/LogIn";

const Boton = (props) => {

return (
    <button
    id={props.id}
    className={props.className}
    onClick={()=> {}}
    type={props.type}
    value={props.value}
    disabled= {props.disabled}
    style={props.style}
    
     >

    </button>
)
}
export default Boton;