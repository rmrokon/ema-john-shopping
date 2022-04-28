import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import CartItem from '../CartItem/CartItem';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const handleDelete = (productToBeDeleted) => {
        const rest = cart.filter(product => product._id !== productToBeDeleted._id)
        setCart(rest);
        removeFromDb(productToBeDeleted._id);
    }
    return (
        <div className='shop-container'>
            <div id='products-on-cart' className="products-container">
                {
                    cart.map(product =>
                        <CartItem key={product._id} product={product} handleDelete={handleDelete}></CartItem>
                    )
                }
            </div>
            <div className="cart-container">
                <OrderSummary cart={cart}>
                    <button className='clear-cart-btn'>Clear Cart</button>
                    <Link to='/shipment'>
                        <button className='review-order-btn'>Proceed Checkout</button>
                    </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default Orders;