import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cart } = useContext(CartContext);
  //console.log('PPPPP', cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((valorPrev, ValorAct) => valorPrev + ValorAct.quantity, 0))
  }, [cart])

  return (
    <Link to={'/cart'}>
      <div>
        <img alt='12' src='/img/carrito.png' width='40px' />{total}
      </div>
    </Link>

  )
}

export default CartWidget