import React from 'react'
import { useState, useEffect } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemCart = ({product}) => {

  const [quantity, setQuantity] = useState(product.quantity);  
  const {updateItem} = useContext(CartContext);
  
  useEffect (() => {
      updateItem(product.id, quantity);
  }, [quantity])

  return (

    <div>
        <h2>Name: {product.name} </h2>
        <h3>$: {product.price}</h3>
        <h2> Cantidad: {product.quantity} </h2>
        <ItemCount counter={quantity} setCounter={setQuantity}/>
    </div>
  )
}



export default ItemCart