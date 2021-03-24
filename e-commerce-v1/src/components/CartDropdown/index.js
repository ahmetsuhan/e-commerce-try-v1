import React from 'react'
import './cartDropdown.scss';
import CustomButton from '../CustomButton/index';

import CartItem from '../cartItem/index';
import {connect} from 'react-redux';


const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    } )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = ({cart:{cartItems}}) => {

    return {
        cartItems
    }
}
export default connect(mapStateToProps)(CartDropdown)
