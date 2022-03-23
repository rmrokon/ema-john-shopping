import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    const selectedItems = props.cart.length;
    let totalPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;

    props.cart.forEach(productOnCart => {
        totalPrice += productOnCart.price;
        totalShipping += productOnCart.price * 0.02;
        tax += productOnCart.price * 0.05;
        grandTotal = totalPrice + totalShipping + tax;
    })

    return (
        <div className='order-summary'>
            <h3>Order Summary</h3>
            <p>Selected Items: {selectedItems}</p>
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