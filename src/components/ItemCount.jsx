import { useCallback, useEffect, useState } from "react";
import Icon from "./CartWidget";



const SumarAlCarrito = () => {

 

    const [Sumar, setsumar] = useState(0)

    const Sumar1 = () => {
        setsumar(Sumar + 1)
    }
    const Restar1 = () => {
        setsumar(Sumar - 1)
    }
    const Carrito = () => {
       
        if(Sumar <= 0) {
            console.error("No agregaste ningun producto")} 
            else { 
                 console.log("Usted a agregado al carrito " + Sumar +   " productos " )
                }
            }
   
   
    return (
        <>
            <div className="compra" style={{ display: "flex", justifyContent: "center", gap: 50, backgroundColor: "white", width: 400 }}>
                <button style={{ fontSize: "50px" }} className="agr/rest" onClick={Sumar1}> + </button>
                <h2 style={{ fontSize: "30px" }}>{Sumar}</h2>
                <button style={{ fontSize: "30px" }} onClick={Restar1}> - </button>
                <button style={{ fontSize: "30px" }} onClick={Carrito}> Sumar Al Carrito

                </button>
               
            </div>
        </>
    )
    
    }
export default SumarAlCarrito