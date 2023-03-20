import React, { useEffect } from 'react'
import './style.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



const ItemDetail = ({detail}) => {
  //console.log(detail);


  const {addItem} = useContext(CartContext);
  const navigate = useNavigate();
  const [counter , setCounter] = useState(0);

  useEffect(() => {
    setCounter(detail?.stock === 0 ? 0 : 1)
  }, [detail])

  return (
    <div className='item1'>
        <img src={`/img/${detail.image}`} alt={detail.name} width='200px'/>
        <h2>{detail.name}</h2>
        <h2>{detail.price}</h2>
        <ItemCount counter={counter} setCounter={setCounter}/>
        <button onClick={() => navigate('/')}>Seguir comprando</button>
        <button disabled={counter > detail.stock} onClick={() => addItem(detail ,counter)}>Agregar al carrito</button>
        <button onClick={() => navigate('/cart')}>Completar compra</button>
    </div>
  )
}

export default ItemDetail