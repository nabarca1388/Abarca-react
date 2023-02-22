import React from 'react'
import Item from '../Item/Item';
import './style.css';

const ItemList = ({productList}) => {

  console.log(productList);  

  return (
    <div className='itemList'>
        {
            productList.map((product) => (
                <div key={product.id}>
                    <Item product={product}/>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList