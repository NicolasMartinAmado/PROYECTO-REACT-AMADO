import { Button } from "bootstrap";
import { useState } from "react";

const Like = () => {
    const [buttontext, setbuttontext] = useState("Toque aqui para indicar que le gusta nuestra pagina")

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={{ marginTop: 600, fontWeight: "bolder", fontSize: 17 }} onClick={() => setbuttontext("¡¡Gracias por su me gusta!!")}>
                {buttontext}
            </button>
        </div>
    )
}
export default Like;