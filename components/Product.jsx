import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ category: '', company: '', minPrice: 0, maxPrice: 10000, rating: 0, availability: 'all' });
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch product data from the JSON file
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [filters, page]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            {/* Filters */}
            <div className="mb-4">
                <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
                    <option value="">Select Category</option>
                    {/* Add other category options here */}
                </select>
                <select onChange={(e) => setFilters({ ...filters, company: e.target.value })}>
                    <option value="">Select Company</option>
                    {/* Add company options here */}
                </select>
                {/* Add other filters such as price range, rating, and availability */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="border p-4">
                        <h2 className="text-lg font-semibold">{product.productName}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>Availability: {product.availability}</p>
                        <button onClick={() => navigate(`/product/${index}`)} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">View Details</button>
                    </div>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className="mt-4">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Product;
