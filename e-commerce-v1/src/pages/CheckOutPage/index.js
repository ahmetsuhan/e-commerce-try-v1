import React from 'react'
import './checkOutPage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/Cart/cartSelector';

import CheckOutItem from '../../components/CheckOutItem/index';

import StripeCheckoutButton from '../../components/StripeCheckoutButton'

const CheckOutPage = ({cartItems,total}) => {
    return (
        <div className="check-out-page">
            <div className="check-out-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( (cartItem) => {
                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                } )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br/>
                paymentest@gmail.com -
            name: Tester -
            credit number: 4242 4242 4242 4242 - Exp: 10/25 -  CVV:123
            </div>
            <StripeCheckoutButton price={total}/>
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(CheckOutPage);
