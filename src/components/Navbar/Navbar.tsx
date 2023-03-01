import React from 'react'
import './styles/Navbar.css'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => (
    <nav className="navbar">
        <a className="navbar-brand" href="#">Library</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;