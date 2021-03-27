import React from 'react';

import './collectionPage.scss';

import {connect} from 'react-redux';

import {selectCollection} from '../../redux/Shop/shopSelector';
import CollectionItem from '../../components/CollectionItem';


const CollectionPage = ({collection}) => {
    const {title,items} = collection;

    return (
        <div className="collection-page">
           <h2 className="title">{title}</h2>
           <div className="items">
               {items.map( (item) => {
                   return (
                       <CollectionItem key={item.id} item={item}/>
                   )
               } )}
           </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
