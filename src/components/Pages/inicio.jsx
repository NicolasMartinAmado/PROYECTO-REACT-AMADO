import PageDetail from "./detail";
import SumarAlCarrito from "../ItemCount";
import Mock from "../data/mock";
import { useState } from "react";
import LoginInput from "../hooks/LogInInput";


const inicio = () => {


  

  return (
    <><h1 style={{ color: "white", textAlign: "center", padding: 50 }} >BIENVENIDO A LA PAGINA OFICIAL DE MESSI</h1>
    
      <LoginInput/>
      <PageDetail />
      <Mock />
    </>
  )
}
export default inicio;