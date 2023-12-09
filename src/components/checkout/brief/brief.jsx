const Brief = ({totalamount , clear, finishPurchase }) => {
    const total = totalamount();
    return (
      <div>
        <p className="totalPurchase">Total: ${total}</p>
        {total > 0 && (
          <>
            <button className="clearCart" onClick={() => clear()}>Clear cart</button>
            <button className="finishPurchase" onClick={() => finishPurchase()}>Finish purchase</button>{" "}
          </>
        )}
      </div>
    );
  };
  
  export default Brief;