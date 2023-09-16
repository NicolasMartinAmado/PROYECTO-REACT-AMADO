import Icon from "./CartWidget";

function Navbar() {

    return (
        <body >

            <><h1 style={{ color: "white", padding: 30, fontWeight: "bolder", fontSize: 40, textAlign: "center" }}>
                EL MESSIAS
            </h1> <Icon/>
                <header style={{ display: "flex", justifyContent: "center" }}>
                    <li className="lista" style={{ display: "flex", justifyContent: "center", gap: 150, fontSize: 20, borderBottom: "5px solid black" }}>
                        <a style={{ color: "white", fontWeight: "bolder" }} href="">INICIO</a>
                        <a style={{ color: "white", fontWeight: "bolder" }} href="">CONTACTO</a>
                        <a style={{ color: "white", fontWeight: "bolder" }} href="">PRODUCTOS</a>
                        <a style={{ color: "white", fontWeight: "bolder" }} href="">ENCUENTROS</a>
                    </li>
                </header></>
        </body>
    )
}


export default Navbar;
