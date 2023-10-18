import PageDetail from "./detail";
import SumarAlCarrito from "../ItemCount";
import Mock from "../data/mock";
import { useState } from "react";
import LoginInput from "../hooks/LogInInput";
import Loading from "../spinner";
import { UserServices } from "../../services/user";

import Userdetail from "./userdetail";
import Layout from "../layout";

const inicio = () => {


  

  return (
    <Layout> 
    <><h1 style={{ color: "white", textAlign: "center", padding: 50 }} >BIENVENIDO A LA PAGINA OFICIAL DE MESSI</h1>

<Loading/>
     
      <Mock />

    </>
    </Layout>
  )
}
export default inicio;