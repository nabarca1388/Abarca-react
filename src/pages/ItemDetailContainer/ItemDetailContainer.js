import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/data';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const {id} = useParams();
  //console.log(id);  

  const [detailObject, setDetailObject] = useState({});

//  const getProducts = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          const findProduct = products.find((item) => item.id == id);
//          resolve(findProduct)
//      }, 1000)
//  })


  const getProducts = () => {
    const db = getFirestore();
    const querySnapShot = doc(db, 'products', id)

    getDoc(querySnapShot)
    .then((response) =>{
      setDetailObject({
        id: response.id, ...response.data()
      })
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getProducts()  
    //getProducts
      //.then((response) => {
        //  setDetailObject(response)
       // })
      //.catch((error) => {
       // console.log(error);
     // })
  }, [])

  return (
    <div> <ItemDetail detail={detailObject}/> </div>
  )
}


export default ItemDetailContainer