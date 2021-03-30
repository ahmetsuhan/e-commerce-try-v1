import React from 'react'

import {CartItemContainer, CartItemImage,ItemDetailsContainer,CartItemSpanContainer} from './cartItem.styles';

const CartItem = ({item:{imageUrl,price,name,quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage alt="item" src={imageUrl}/>
            <ItemDetailsContainer >
                <CartItemSpanContainer>{name}</CartItemSpanContainer>
                <CartItemSpanContainer>{quantity} x ${price}</CartItemSpanContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;
