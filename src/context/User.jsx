import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const [User, setuser] = useState([40])

export const userprovider = (children) => {
    const [saludo, setsaludo] = useState("Hola")
}


return (
    <UserContext.Provider value={{userprovider,User, setuser, saludo, setsaludo}}>
{children}
    </UserContext.Provider> 
)