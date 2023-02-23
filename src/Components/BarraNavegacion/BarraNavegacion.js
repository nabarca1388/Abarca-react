import React from 'react'
import './style.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


export default function BarraNavegacion() {
    return (
        <div className="navbar">

        <img className='' alt='1' src='/img/logo.png' width='50px' />

            <ul className="lista">

                <li>
                    <NavLink className={({isActive }) => isActive? 'active' : 'inactive' } 
                        to="/">Home
                    </NavLink>    
                </li>
                {/* 
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Billetera</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Mostrar</a></li>
                        <li><a className="dropdown-item" href="#">Comprar</a></li>
                        <li><a className="dropdown-item" href="#">Vender</a></li>
                    </ul>
                </li>
                */}

                <li>
                    <NavLink className={({isActive }) => isActive? 'active' : 'inactive' } 
                        to="/category/acciones">Acciones
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive }) => isActive? 'active' : 'inactive' } 
                        to="/category/cedear">Cedears
                    </NavLink>
                </li>

            </ul>

            <div>
                <CartWidget />
            </div>
        </div>
    )
}