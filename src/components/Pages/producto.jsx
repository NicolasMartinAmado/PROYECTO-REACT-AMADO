import Layout from "../layout/layout";
import { Producto } from "../../data/producto";
import Item from "../itemlistcontainer/item";

const Pageproductos = () => {

  return (
    <Layout>
      <h1 style={{ color: "white", textAlign: "center", padding: 80 }}>PRODUCTOS</h1>
      <div className="product" > {Producto.map((product) =>
        <><Item data={product} />
        </>
      )}
      </div>


    </Layout>
  )
}
export default Pageproductos;

