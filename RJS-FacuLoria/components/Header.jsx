import '../src/App.css'
import React, { useState } from 'react';
import Compra from "../components/botones"

const Header = () => { 
    return (
        <header className="header">
            <div className="header_container">
            <h1 className="header_logo"><img src="./public/PapirosNorte.png" alt="Carrito"/></h1>

                <nav className="header_nav">
                    <a href="a" className='links'>Inicio</a>
                    <a href="b" className='links'>Productos</a>
                    <a href="c" className='links'>Contacto</a>
                    <img src="./public/carrito.png" alt="Carrito"/>
                    <p>199</p>
                </nav>

            </div>
        </header>
    )
}

export default Header