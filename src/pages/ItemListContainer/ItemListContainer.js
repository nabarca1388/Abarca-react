import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { products } from '../../data/data';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([]);  

  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(products)
      }, 1000)
  });

  useEffect(() => {
      getProducts
      .then((response) => {
          setProductList(response)
      })
      .catch((error) => {
          console.log(error);
      })
  }, []);

  return (
    <div>
        <ItemList productList={productList}/>
    </div>
  )
}

export default ItemListContainer