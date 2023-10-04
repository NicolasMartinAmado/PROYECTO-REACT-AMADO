
import { Button } from "bootstrap";
import SumarAlCarrito from "../ItemCount"
import Like from "../itemlistcontainer"
import Boton from "../Boton";
import Mock from "../data/mock";
import { useEffect, useState } from "react";
import products from "../data/producto";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Pageinicio from "./inicio"

const PageDetail = () => {

  const [Detail, setDetail] = useState()

  const { productoId } = useParams()

  useEffect(() => {
    fetch(`../data/producto.js/${productoId}`)
      .then((response => {
        return response.json()
      }))
      .then((data) => {
        setDetail(data)
      })
  }, [])

  console.log(Detail)

  if (productoId === "Argtitular2022") {
    return (
      <>  <div style={{ backgroundColor: "black", color: "white", border: "3px white solid", width: "300px", justifyContent: "center", textAlign: "center", marginLeft: "800px" }}>
        <h1>Detalle de los productos</h1>
        <h3>
          Id del producto {productoId}
        </h3>
        <h3>  Modelo : "Seleccion argentina 2022"</h3>
        <h3> Precio: $35000</h3>
        <h3> Stock : 20</h3>
        <img style={{ width: "250px", height: "300px", alignContent: "center", alignSelf: "center" }} src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" alt="" />
      </div>
        <div> <SumarAlCarrito /></div>
      </>
    )

  } else if (productoId === "ArgAlternativa2022") {
    return (
      <>  <div style={{ backgroundColor: "black", color: "white", border: "3px white solid", width: "300px", justifyContent: "center", textAlign: "center", marginLeft: "800px" }}>
        <h1>Detalle de los productos</h1>
        <h3>
          Id del producto {productoId}
        </h3>
        <h3> Modelo : "Seleccion argentina Alternativa 2022"</h3>
        <h3> Precio: $25000</h3>
        <h3> Stock : 13</h3>
        <img style={{ width: "250px", height: "300px", alignContent: "center", alignSelf: "center" }} src="https://afaar.vtexassets.com/arquivos/ids/156071/Camiseta_Alternativa_Seleccion_Argentina_Femenina_23_Version_Masculina_Negro_IB8536_01_laydown.jpg?v=638188039400830000" alt="" />
      </div>
        <div> <SumarAlCarrito /></div>
      </>
    )
  }
}
export default PageDetail;