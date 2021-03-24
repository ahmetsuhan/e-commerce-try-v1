import React from 'react';
import './checkOutItem.scss';

const CheckOutItem = ({cartItem:{name,imageUrl,price,quantity}}) => {
    return (
        <div className="check-out-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckOutItem
