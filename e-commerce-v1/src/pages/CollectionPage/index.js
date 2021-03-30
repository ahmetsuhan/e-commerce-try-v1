import React from 'react';

import './collectionPage.scss';

import {connect} from 'react-redux';

import {selectCollection} from '../../redux/Shop/shopSelector';
import CollectionItem from '../../components/CollectionItem';

import 
{
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer

} from './collectionPage.styles';

const CollectionPage = ({collection}) => {
    const {title,items} = collection;

    return (
        <CollectionPageContainer>
           <CollectionTitle>{title}</CollectionTitle>
           <CollectionItemsContainer>
               {items.map( (item) => {
                   return (
                       <CollectionItem key={item.id} item={item}/>
                   )
               } )}
           </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
