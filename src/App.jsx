
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Nav from './components/Nav';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

