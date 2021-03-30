import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/Cart/cartActions';


import {CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer} from './collectionItem.styles';

const CollectionItem = ({item,addItem}) => {

    const {name,price,imageUrl} = item;
    return (
        <CollectionItemContainer >
            <BackgroundImage className="image"
              imageUrl={imageUrl}
            />
            <CollectionFooterContainer >
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
                <AddButton onClick = {() => addItem(item)} inverted> ADD TO CART </AddButton>
         
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {addItem: (item) => dispatch(addItem(item))}
}

export default connect(null,mapDispatchToProps)(CollectionItem)
