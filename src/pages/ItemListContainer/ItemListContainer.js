import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { products } from '../../data/data';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([]);

    const { categoryId } = useParams();
    //console.log(categoryId);

    const getProducts = new Promise((resolve, reject) => {
        if (categoryId) {
            const filterProducts = products.filter((item) => item.category === categoryId);
            setTimeout(() => {
                resolve(filterProducts)
            }, 1000)
        } else {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        }
    });

    useEffect(() => {
        getProducts
            .then((response) => {
                setProductList(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryId]);

    return (
        <div>
            <ItemList productList={productList} />
        </div>
    )
}

export default ItemListContainer