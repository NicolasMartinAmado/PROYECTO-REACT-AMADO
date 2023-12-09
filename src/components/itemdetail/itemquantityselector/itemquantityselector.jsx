import React, { useState } from "react";

const ItemCount = () => {

    const [count, setcount] = useState(1)

  const handleAdd = () => {
  setcount(count + 1)
  };

  const handleSubtract = () => {
    if(count <= 0){
        setcount(count + 0) 
    }else setcount(count - 1)

    }


  return (
    <div className="item-count">
          <button onClick={handleAdd}>+</button>

   <input
        type="number"
        min="0"
        max="0"
        value={count}
        onChange={(e) => {
          count = e.target.value;
         
        }}
      />
      <button onClick={handleSubtract}>-</button>
    </div>
  );
  }

export default ItemCount;