import { Link, useParams } from "react-router-dom";
import Layout from "../layout/layout";
import { NavLink } from "react-bootstrap";
import imagenes from "../../assets/img/imagenes";



const Pageproductos = () => {

  return (
    <Layout>
      <main>
        <h1 style={{ color: "white", textAlign: "center", padding: 80 }}>PRODUCTOS</h1>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <NavLink to="/producto:01">
            <div productoId="Argtitular2022" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }}>
              <img style={{width: "380px", height:"400px"}} src={imagenes.img1} />
            </div> </NavLink> <div id="producto3" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }}>
            <img style={{width: "380px", height:"400px", objectFit:"cover"}} src={imagenes.img6} />
          </div><div id="producto4" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }} >
            <img style={{width: "380px", height:"400px"}} src={imagenes.img2} />
          </div>
        </section>
        <section style={{ display: "flex", justifyContent: "center" }}  >
          <div id="producto5" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }}>
            <img style={{width: "380px", height:"400px"}} src={imagenes.img3} />
          </div><div id="producto6" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }}>
            <img style={{width: "380px", height:"400px"}} src={imagenes.img4} />
          </div><div id="producto7" style={{ display: "flex", justifyContent: "center", width: "100%", height: 450 }} >
            <img style={{width: "380px", height:"400px", objectFit:"cover"}} src={imagenes.img5} />
          </div>
        </section>


      </main>
    </Layout>
  )
}
export default Pageproductos;

