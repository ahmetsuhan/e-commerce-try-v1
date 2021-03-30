import React from 'react'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/Cart/cartSelector';

import CheckOutItem from '../../components/CheckOutItem/index';

import StripeCheckoutButton from '../../components/StripeCheckoutButton'

import {
    CheckOutPageContainer,
    CheckOutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
        
} from './checkOutPage.styles';


const CheckOutPage = ({cartItems,total}) => {
    return (
        <CheckOutPageContainer >
            <CheckOutHeaderContainer>
                <HeaderBlockContainer >
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer >
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer >
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer >
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckOutHeaderContainer>
            {
                cartItems.map( (cartItem) => {
                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                } )
            }
            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <WarningContainer >
                *Please use the following test credit card for payments*
                <br/>
                paymentest@gmail.com -
            name: Tester -
            credit number: 4242 4242 4242 4242 - Exp: 10/25 -  CVV:123
            </WarningContainer>
            <StripeCheckoutButton price={total}/>
           
        </CheckOutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(CheckOutPage);
