import React from 'react'
import './NavBar.css';
import CarWidget from '../CartWidget/CarWidget';

const NavBar = () => {
    return (
        <header>
            <h1>Scala Bakery</h1>

            <nav>
                <ul>
                    <li>Laminados</li>
                    <li>Pastelería</li>
                    <li>Tortas con frutas</li>
                </ul>
            </nav>
            <CarWidget/>
        </header>
    )
}

export default NavBar