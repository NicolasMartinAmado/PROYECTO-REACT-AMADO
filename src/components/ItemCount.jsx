import { useCallback, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../context/cartcontext";
import { chango } from "./CartWidget";
import { limit } from "firebase/firestore";



const SumarAlCarrito = () => {
    
    const [Sumar, setsumar] = useState(0)
    

    const Sumar1 = () => {
        setsumar(Sumar + 1)
    }
    const Restar1 = () => {
        if (Sumar > 0){
        setsumar(Sumar - 1)}
        
    }

    const Carrito = () => {

      
        if(Sumar <= 0) {
            Swal.fire({ title: "No agregaste ningun producto" ,
            icon: 'warning',
            })}
            else if(Carrito){
              
                 
            
                    
                
                Swal.fire(
                    {
                        title: "Estas seguro de que quieres agregar " + Sumar + " producto/s al carrito?" ,
                        icon: 'Success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
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
                     
                
            } 
            else { 
                 console.log("Usted a agregado al carrito " + Sumar +   " productos " )
                }
            }
   
    return (
        <>

            <div style={{ display: "flex", justifyContent: "center", gap: 50, color:"black", backgroundColor:"white" }}>
                <button style={{ fontSize: "50px" }} className="agr/rest" onClick={Sumar1}> + </button>
                <h2 style={{ fontSize: "30px" }}>{Sumar}</h2>
                <button style={{ fontSize: "30px" }} onClick={Restar1}> - </button>
                <button style={{ fontSize: "30px" }} onClick={Carrito}> Sumar Al Carrito </button>
               
       
            </div>

        </>
    )   
    }
export default SumarAlCarrito