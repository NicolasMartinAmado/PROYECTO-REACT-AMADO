import { NavLink } from "react-router-dom";
import Icon from "./CartWidget";


function Navbar() {

    return (
        <body >
            <> <Icon />
                <header style={{ display: "flex", justifyContent: "center" }}>
                    <li className="lista" style={{ display: "flex", justifyContent: "center", gap: 150, fontSize: 20, borderBottom: "5px solid black" }}>
                        <li>  <NavLink to="/" style={{ color: "white", fontWeight: "bolder" }} > INICIO </NavLink> </li>
                        <li> <NavLink to="/contacto" style={{ color: "white", fontWeight: "bolder" }} > CONTACTO </NavLink></li>
                        <li> <NavLink to="/producto" style={{ color: "white", fontWeight: "bolder" }} > PRODUCTOS </NavLink></li>
                        <li> <NavLink to="/encuentros" style={{ color: "white", fontWeight: "bolder" }} > ENCUENTROS </NavLink></li>

                    </li>

                </header></>
                 
        </body>
    )
}


export default Navbar;
