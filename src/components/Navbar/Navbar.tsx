import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => (
    <nav className="navbar">
        <Link to={'/loads'} className="nav-link">
            Library
        </Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={'/loads'} className="nav-link">
                    Loads
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/books'} className="nav-link">
                    Books
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/book-copies'} className="nav-link">
                    Book copies
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/users'} className="nav-link">
                    Users
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;