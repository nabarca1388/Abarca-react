import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc, writeBatch } from 'firebase/firestore';
import ItemCart from './ItemCart';


const Cart = () => {

    const { cart, clear, removeItem, total } = useContext(CartContext);
    const navigate = useNavigate();
    const db = getFirestore();
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const createOrder = (event) => {
        event.preventDefault();
        const querySnapShot = collection(db, 'orders');

        addDoc(querySnapShot, {
            buyer: {
                email: formValue.email,
                name: formValue.name,
                phone: formValue.phone
            },
            products: cart.map((product) => {
                return {
                    title: product.name,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity
                }
            }),
            total: total,
        })
            .then((response) => {
                console.log(response.id);
                alert(`Orden con ID: ${response.id} creada`)
                updateStocks()
            })
            .catch((error) => console.log(error))
    }

    const updateStocks = () => {
        cart.forEach((product) => {
            const querySnapShot = doc(db, 'products', product.id)

            updateDoc(querySnapShot, {
                stock: product.stock - product.quantity,
            })
                .then(() => {
                    alert('El stock se actualizo')
                })
                .catch((error) => console.log(error))
        })
    }


    const handleInput = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    }


    return (
        <div className='cartContainer'>
            <div>
                {cart.map((product) => (
                    <div className='itemCart'>
                        {/*     <h2>Name: {product.name} </h2>
                    <h3>$: {product.price}</h3>
                    <h2> Cantidad: {product.quantity} </h2>
                    <ItemCount counter={product.quantity}/>
                */}

                        <ItemCart product={product} />
                        <button onClick={() => removeItem(product.id)}> Quitar</button>
                    </div>
                ))}
            </div>


            <div>
                {cart.length > 0 && <button  onClick={() => clear()}>Vaciar carrito</button>}

                {cart.length > 0 && <div>
                    <button  onClick={() => navigate('/')}>Seguir comprando</button>
                    <span>El total es $ {total}</span>
                </div>}

                <div className='cartForm'>
                    <form>
                        <input name='name' type='text' placeholder='name' value={formValue.name} onChange={handleInput}/>
                        <input name='phone' type='text' placeholder='phone' value={formValue.phone} onChange={handleInput}/>
                        <input name='email' type='email' placeholder='email' value={formValue.email} onChange={handleInput}/>
                        <button onClick={createOrder}>Completar compra</button>
                    </form>
                </div>

                {cart.length === 0 && (
                    <h2>No hay productos en el carrito</h2>
                )}
            </div>

        </div>
    )
}

export default Cart