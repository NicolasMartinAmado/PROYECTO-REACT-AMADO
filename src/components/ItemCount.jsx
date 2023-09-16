import { useCallback, useEffect, useState } from "react";


const SumarAlCarrito = () => {

    const [Sumar, setsumar] = useState(0)

    const Sumar1 = () => {
        setsumar(Sumar + 1)
    }
    const Restar1 = () => {
        setsumar(Sumar - 1)
    }



    useEffect(() => {

    })
    return (

        <>
            <div className="compra" style={{ display: "flex", justifyContent: "center", gap: 50, backgroundColor: "white", width: 400 }}>
                <button style={{ fontSize: "50px" }} className="agr/rest" onClick={Sumar1}> + </button>
                <h2 style={{ fontSize: "30px" }}>{Sumar}</h2>
                <button style={{ fontSize: "30px" }} onClick={Restar1}> - </button>
                <button style={{ fontSize: "30px" }}> Agregar al Carrito

                </button>
            </div>


        </>

    )

}
export default SumarAlCarrito