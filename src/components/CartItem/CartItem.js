import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const { product, handleDelete } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='cart-item'>
            <div className='description'>
                <img src={img} alt="" />
                <div>
                    <h3 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleDelete(product)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default CartItem;