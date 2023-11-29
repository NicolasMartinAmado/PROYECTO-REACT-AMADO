import React, { useContext } from 'react'


import Item from '../components/itemlistcontainer/item'
import Spinner from '../UI/Spinner';
import { CartContext } from '../context/cartcontext';

function ItemList({dato}) {
    const {addToCart} = useContext(CartContext)
    return (
        <div className="ItemList">

            {dato? dato.map((camiseta)=>(
                <Item key={camiseta.Id}
                    clase="catalogo"
                    camiseta={camiseta}
                    onAdd={addToCart}/>))
                    
                :<Spinner/>}
        </div>
    )
}

export default ItemList