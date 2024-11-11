// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;