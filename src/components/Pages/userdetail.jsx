import { useEffect, useState } from "react";
import { UserServices } from "../../services/user";

const Userdetail = () => {
    const [user, setuser] = useState("")
useEffect(()=> {
    UserServices.GetUser().then(data=> setuser(data))
},[])



console.log(user)

return(
    <div>{user &&
        (
<div>{user.name}</div>
        )
    }</div>
)


}

export default Userdetail;