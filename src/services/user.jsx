import {Firestore, addDoc, collection, doc, getDoc, getFirestore} from "firebase/firestore"
import { useState } from "react"







const GetUser = async() => {

   
    const db = getFirestore
 const UserRef = doc (db, "users", "VpDzmyYuBry7PS5fTKuU"   )
const snapshot = await getDoc(UserRef) 
    if (snapshot.exists())
    return {
        id: snapshot.id,
        ...snapshot.data()
        
}

}
const Adduser = async (data) => {
    const db = getFirestore()
    const Useref = collection(db, "users")
    const resp = await addDoc(Useref, data)

    return resp
} 




export const UserServices = {GetUser,Adduser};