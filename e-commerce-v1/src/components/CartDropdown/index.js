import React from 'react'
import './cartDropdown.scss';
import CustomButton from '../CustomButton/index';

import CartItem from '../cartItem/index';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/Cart/cartSelector';
import {toggleCartHidden} from '../../redux/Cart/cartActions';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';


const CartDropdown = ({cartItems=[],history, dispatch}) => {
    // console.log(cartItems.length)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length? 
                        (cartItems.map((cartItem) => {
                            return (
                                <CartItem key={cartItem.id} item={cartItem}/>
                            )
                        } )): 
                        (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                    history.push('/check-out');
                    dispatch(toggleCartHidden());
                }
            }
                >
                    GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
        cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
