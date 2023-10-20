import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./log.css"

import { NavLink } from "react-router-dom";






const LoginInput = () => {

    const users = [
        { nombre: "Rodrigo", contraseña: "1234" },
        { nombre: "Nicolas", contraseña: "1444" },
        { nombre: "Matias", contraseña: "1505" },
        { nombre: "Federico", contraseña: "1010" }
    ]

    const [user, setuser] = useState()

    const userHandleChange = (e) => {
        setuser(e.target.value)
    }
    const [email, setemail] = useState("")

    const emailHandlechange = (e) => {
        setemail(e.target.value)
    }

    const [password, setpassword] = useState()
    const passwordHandleChange = (e) => {
        setpassword(e.target.value)
    }

    const Auth = () => {
     const FoundUs = users.find((x) =>
            x.nombre === user && x.contraseña === password
        )
       return ( 
        <><div> {FoundUs ? (Swal.fire({
               title: 'Bienvenido ' + ` ${user}`,
               icon: 'success',
              footer: `<a href="/producto">VE A LA TIENDA</a> `
           })
           )
               : Swal.fire({
                   title: `DATOS INGRESADOS INCORRECTOS`,
                   icon: 'error',
                   footer: `<a href="/contacto">SI NO TENES UNA CUENTA CREADA, PORFAVOR REGISTRESE AQUI</a> ` 
               }

               )}
           </div>

               </>
       )
    }
 

    const Logout = () => {
        setuser(false)
    }
    
    
    const SignUp = (nombre, mail, telefono, fechanacimiento, contraseña) => {
        
        console.log("Usuario registrado ", {
            nombre,
            mail,
            telefono,
            fechanacimiento,
            contraseña
    
        })
    
    }
    
    const ChangePasssword = (Newpassword, Lastpassword) => {
        console.log("Cambiando password", {Lastpassword, Newpassword})
    }
    return (
        <> 

        <div className="inp input-inicio-iniciarsesion"> <input type="text" placeholder="Ingrese su nombre de usuario" value={user} onChange={userHandleChange} />
            <input type="text" placeholder="Ingrese su mail" value={email} onChange={emailHandlechange} />
            <input type="password" placeholder="Ingrese su contraseña" value={password} onChange={passwordHandleChange} />
            <button className="bt" type="submit" onClick={Auth} > iniciar sesion  </button>
            </div>
            

        </>

    )
}
export default LoginInput;

