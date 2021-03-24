import React from 'react'
import './cartDropdown.scss';
import CustomButton from '../CustomButton/index';

import CartItem from '../cartItem/index';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/Cart/cartSelector';


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


const mapStateToProps = (state) => {

    return {
        cartItems:selectCartItems(state)
    }
}
export default connect(mapStateToProps)(CartDropdown)
