import React from 'react'

import CustomButton from '../CustomButton/index';

import CartItem from '../cartItem/index';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/Cart/cartSelector';
import {toggleCartHidden} from '../../redux/Cart/cartActions';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { CartDropdownContainer,CartItemsContainer, EmptyMessageContainer } from './cartDropdown.style';


const CartDropdown = ({cartItems=[],history, dispatch}) => {
    // console.log(cartItems.length)
    return (
        <CartDropdownContainer >
            <CartItemsContainer>
                {
                    cartItems.length? 
                        (cartItems.map((cartItem) => {
                            return (
                                <CartItem key={cartItem.id} item={cartItem}/>
                            )
                        } )): 
                        (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                    history.push('/check-out');
                    dispatch(toggleCartHidden());
                }
            }
                >
                    GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}


const mapStateToProps = createStructuredSelector({
        cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
