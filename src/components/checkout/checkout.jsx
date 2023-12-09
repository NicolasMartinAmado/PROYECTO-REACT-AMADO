

import Cartitem from "../cartitem/cartItem";
import Brief from "./brief/brief";


const Checkout = ({ cartList, deleteItem, clear, finishPurchase, totalamount }) => {
  return (
    <div className="cartContainer">
      {cartList.map(({ item, quantity }) => (
        <Cartitem key={item.id} item={item} quantity={quantity} deleteItem={deleteItem} />
      ))}
      <Brief totalamount={totalamount} clearCart={clear} finishPurchase={finishPurchase} />
    
    </div>
  );
};

export default Checkout;