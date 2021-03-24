import CartActionTypes from './cartTypes';


export const toggleCartHidden = () => {

    return{
        type: CartActionTypes.TOOGLE_CART_HIDDEN
    }

}

export const addItem = (item) => {

    return {
        type:CartActionTypes.ADD_ITEM,
        payload:item
    }

}