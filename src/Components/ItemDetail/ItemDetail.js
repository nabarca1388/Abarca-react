import React from 'react'
import './style.css'

const ItemDetail = ({detail}) => {
  console.log(detail);
  return (
    <div className='item1'>
        <img src={detail.image} alt={detail.name} width='200px'/>
        <h2>{detail.name}</h2>
        <h2>{detail.price}</h2>
    </div>
  )
}

export default ItemDetail