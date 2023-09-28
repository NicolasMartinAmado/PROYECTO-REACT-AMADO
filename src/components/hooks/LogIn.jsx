import { useState } from "react"
import Boton from "../Boton"

const users =[
     {nombre : "Rodrigo", contraseña : "1234"},
    {nombre : "Nicolas", contraseña : "1444"},
    {nombre : "Matias", contraseña : "1505"} ,
    {nombre : "Federico", contraseña : "1010"} 
]



const Useauth = () => {

const [Isauth, Setisauth] = useState(false)

const Login = (nombre, contraseña) => {

    const FoundUser = users.find((x)=> 
        x.nombre === nombre && x.contraseña === contraseña )

    if (FoundUser) {
        Setisauth(true) 
        console.log("BIENVENIDO" + users.nombre)
    } else {Setisauth(false)
        console.log("CONTRASEÑA O NOMBRE DE USUARIO INCORRECTA")}

}

const Logout = () => {
    Setisauth(false)
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
    [Useauth, SignUp, Login, Logout, ChangePasssword, Isauth]
            
 
   
)

}

export default Useauth;
