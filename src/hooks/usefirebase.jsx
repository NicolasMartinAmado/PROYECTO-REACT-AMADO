import { useState } from 'react'
import{addDoc, collection, getDocs, getDoc, doc, getFirestore} from "firebase/firestore"



function useFirebase() {
    const [producto, setProducto]=useState({})
    const [productos, setProductos]=useState([])
   
  
    const fetchGetDataCollection=async()=>{
        try{
            const data=collection(db,"Items");
            const col=await getDocs(data)
            const response= col.docs.map(doc=>(
                ({id:doc.id, ...doc.data()}))
                )
            setProductos(response)
        } catch(error){
            console.log(error)
        }
    }


    
    const fetchGetIndividualProduct= async (id)=>{
        try{
            const document= doc(db,"Items",id)
            const response= await getDoc(document)
            let result=response.data()
            setProducto({id:response.id,...result})
        }
        catch (error){
            console.log(error)
        }
    }

   
    const fetchGenerateTicket= async (datos)=>{
    let orden=""
        try{
            const col=collection(db,"ordenes")
            const order= await addDoc(col,datos)
            orden=order.id
            return orden
        } catch (error){
        }

        }

    const fetchGetIndividualTicket= async (id)=>{
        try{
            const document= doc(db,"ordenes",id)
            const response= await getDoc(document)
            let result=response.data()
            setProducto({id:response.id,...result})
        }
        catch (error){
            console.log(error)
        }
    }
    
    return {

        producto,
        productos,
        fetchGenerateTicket,
        fetchGetDataCollection,
        fetchGetIndividualTicket,
        fetchGetIndividualProduct
    }
}








export default useFirebase