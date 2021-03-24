import React from 'react'
import './cartItem.scss';

const CartItem = ({item:{imageUrl,price,name,quantity}}) => {
    return (
        <div className="cart-item">
            <img alt="item" src={imageUrl}/>
            <div className="item-details-container">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;
