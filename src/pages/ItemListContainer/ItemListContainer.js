import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';



const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);

    const { categoryId } = useParams();
    //console.log(categoryId);


    const getProducts = () => {
        const db = getFirestore();
        //const querySnapShot = collection(db, 'products');
        const queryBase = collection(db, 'products');
        const querySnapShot = categoryId ? query(queryBase, where('category', '==', categoryId)) : queryBase;


        //        if (categoryId) {
        //            const filteredQuery = query(querySnapShot, where('category', '==', categoryId));

        getDocs(querySnapShot)
            .then((response) => {
                const list = response.docs.map((doc) => {
                    return {
                        id: doc.id, ...doc.data()
                    }
                });
                setProductList(list);
                //console.log(list);
            })
            .catch((error) => console.log(error))
        //        }else{
        //            getDocs(querySnapShot)
        //            .then((response) => {
        //                const list = response.docs.map((doc) => {
        //                    return {
        //                        id: doc.id, ...doc.data()
        //                    }
        //                });
        //                setProductList(list);
        //                console.log(list);
        //            })
        //            .catch((error) => console.log(error))
        //        }

    }



    const onResize = (evento) => {
        //console.log(evento);
        console.log('El navegador esta cambiando de tamaño');
    }



    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])



    useEffect(() => {
        getProducts();
    }, [categoryId]);



    return (
        <div>
            <ItemList productList={productList} />
        </div>
    )
}

export default ItemListContainer