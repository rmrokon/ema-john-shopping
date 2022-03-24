import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let grandTotal = 0;
    let quantity = 0;
    props.cart.forEach(productOnCart => {
        quantity += productOnCart.quantity;
        totalPrice += (productOnCart.price * productOnCart.quantity);
        totalShipping += productOnCart.shipping;
    })
    const tax = parseFloat((totalPrice * 0.15).toFixed(2));
    grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='order-summary'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p id='grand-total'>Grand Total: ${grandTotal}</p>
            <div>
                <button id='clear-cart-btn'>Clear Cart</button><br></br>
                <button id='review-order-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;