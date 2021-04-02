import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../CollectionPreview/index';
import { selectCollectionsForPreview } from '../../redux/Shop/shopSelector';

import {CollectionsOverviewDiv} from './collectionOverview.styles';


const CollectionsOverview = ({collections}) => {
    return (
        <CollectionsOverviewDiv>
            {
                    collections.map( ({id,...otherCollectionProps}) =>{
                        return(
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                        )
                    } )
                }
        </CollectionsOverviewDiv>
    )
}

const mapStateToProps = createStructuredSelector({

    collections:selectCollectionsForPreview

});
export default connect(mapStateToProps)(CollectionsOverview);
