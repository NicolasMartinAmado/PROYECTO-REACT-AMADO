import React  from 'react'
import ItemList from '../itemlist/itemlist'

function ItemListContainer({data,filtro}) {

    return (
        <div>
            <ItemList dato={data} filtro={filtro}/>
        </div>
    )
}

export default ItemListContainer