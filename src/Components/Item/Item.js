import React from 'react';
import './style.css';

const Item = ({product}) => {
  return (
    <div className='item'>
        <img alt={product.name} src={`/img/${product.image}`} width='100px'></img>
        <h2>{product.name}</h2>
        <h3>{product.category}</h3>
        <h3>{product.price}</h3>
    </div>
  )
}

export default Item