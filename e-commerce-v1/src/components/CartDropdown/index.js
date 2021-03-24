import React from 'react'
import './cartDropdown.scss';
import CustomButton from '../CustomButton/index';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
