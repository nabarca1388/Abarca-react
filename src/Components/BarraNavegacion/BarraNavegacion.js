import React from 'react'
import './style.css'
import CartWidget from '../CartWidget/CartWidget'


export default function BarraNavegacion() {
    return (
        <div className="navbar">



            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Billetera</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Mostrar</a></li>
                        <li><a className="dropdown-item" href="#">Comprar</a></li>
                        <li><a className="dropdown-item" href="#">Vender</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Activos</a>
                </li>
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}