import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/product-list">Product List</Link>
        </nav>
    );
};

export default Nav;
