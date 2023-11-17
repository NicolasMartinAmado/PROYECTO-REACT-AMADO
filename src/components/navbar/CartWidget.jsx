import { useContext, useState } from "react";
import { CartContext } from "../../context/cartcontext";
import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

function CartWidget() {
  const {} = useContext(CartContext);
  const [quantityAdded, setQuantityadded] = useState(``);

  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} de productos`);
    setQuantityadded(cantidad);
  };

  return (
    <>
      <div style={{ color: "white" }}>
        <BsCart4 color="white" fontSize={"40px"} />
        <Badge bg="danger"></Badge>
      </div>
    </>
  );
}
export default CartWidget;
