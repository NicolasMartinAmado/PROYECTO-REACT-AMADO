import {doc, getDoc, getFirestore} from "firebase/firestore"







const GetUser = async() => {

   
    const db = getFirestore
 const UserRef = doc (db, "users", "VpDzmyYuBry7PS5fTKuU"  )
const snapshot = await getDoc(UserRef) 
    if (snapshot.exists())
    return {
        id: snapshot.id,
        ...snapshot.data()
        
}
   
}

const Adduser = ()=> {

    //dfsfs
}


export const UserServices = {GetUser,Adduser};