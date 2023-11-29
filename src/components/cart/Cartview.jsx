import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import Cartitem from "../cartitem/cartItem";
import { Producto } from "../../data/producto";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cartview = () => {
  const { cartList, totalammount, clear } = useContext(CartContext);
  const total = totalammount();

  return (
    <>
      <>
        <div style={{ alignItems: "center", alignSelf: "center" }}>
          {Producto.map((product) => {
            if (cartList[product.Id] > 0) {
              return <Cartitem data={product} />;
            } else if ((cartList[product.Id] = 0)) {
              return <p style={{ color: "white" }}>CARRITO VACIO</p>;
            }
          })}
        </div>{" "}
      </>
      <div>
        {" "}
        {total <= 0 ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {" "}
              <h4
                style={{
                  color: "white",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                TU CARRITO ESTA VACIO
              </h4>{" "}
              <a
                style={{
                  alignItems: "center",
                  alignContent: "center",
                  alignSelf: "center",
                }}
                href="/producto"
              >
                <button
                  style={{
                    width: "150px",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Ir a comprar
                </button>
              </a>{" "}
            </div>{" "}
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <div style={{ width: "150px" }}>
                {" "}
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "blue",
                  }}
                >
                  Subtotal : $ {total}{" "}
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              {" "}
             
              <button
                onClick={() => {
                  Swal.fire({
                    title: `COMPRA CON EXITO`,
                    icon: `success`,
                    footer: `<a href="/contacto">COMPLETA LOS DATOS</a>`,
                  });
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Link to={`/checkout`}> Finalizar compra </Link> 
               
              </button>{" "}
            </div>
            <div style={{display:"flex", gap:1600}}>  <button style={{backgroundColor:"red", cursor:"pointer", color:"white", fontWeight:"bolder"}}  onClick={()=> clear()}>VACIAR CARRITO</button>
            <Link to={`/producto`}><button style={{backgroundColor:"blue",color:"white", cursor:"pointer", fontWeight:"bolder"}}> Seguir comprando</button> </Link> </div>
          
          </>
        )}
      </div>{" "}
      

      
      
      
    </>
  );
};

export default Cartview;
