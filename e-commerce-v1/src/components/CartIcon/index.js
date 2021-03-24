import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/Cart/cartActions';
import {selectCartItemsCount} from '../../redux/Cart/cartSelector';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cartIcon.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className="cart-icon" onClick = {toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
   return {
     toggleCartHidden: () => dispatch(toggleCartHidden())
   }
}

const mapStateToProps = createStructuredSelector({
 
    itemCount: selectCartItemsCount
 
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
