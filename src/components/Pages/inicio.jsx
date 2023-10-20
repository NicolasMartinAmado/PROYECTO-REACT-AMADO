

import Loading from "../spinner/spinner";
import { UserServices } from "../../services/user";

import Userdetail from "./userdetail";
import Layout from "../layout/layout";
import Mock from "../../data/mock";

const inicio = () => {


  

  return (
    <Layout> 
    <><h1 style={{ color: "white", textAlign: "center", padding: 50 }} >BIENVENIDO A LA PAGINA OFICIAL DE MESSI</h1>

<Loading/>
     
     

    </>
    </Layout>
  )
}
export default inicio;