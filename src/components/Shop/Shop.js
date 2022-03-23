import React, { useEffect, useState } from 'react';
import { calculateCart } from '../../utilities/calculateCart';
import Card from '../Card/Card';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log('This is new cart', newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product =>
                        <Card key={product.id} product={product} handleAddToCart={handleAddToCart}></Card>
                    )
                }
            </div>
            <div className="cart-container">
                <OrderSummary cart={cart}></OrderSummary>

            </div>
        </div>
    );
};

export default Shop;