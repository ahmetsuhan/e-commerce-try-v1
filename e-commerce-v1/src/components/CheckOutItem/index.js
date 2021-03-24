import React from 'react';
import './checkOutItem.scss';
import {connect} from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/Cart/cartActions';

const CheckOutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return (
        <div className="check-out-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={ () => removeItem(cartItem) }>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={ () => addItem(cartItem) }>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
   return {
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem:  (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item))
   } 
}
export default connect(null,mapDispatchToProps)(CheckOutItem);
