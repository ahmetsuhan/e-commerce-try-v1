import React from 'react';
import './collectionsOverview.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../CollectionPreview/index';
import { selectCollectionsForPreview } from '../../redux/Shop/shopSelector';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                    collections.map( ({id,...otherCollectionProps}) =>{
                        return(
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                        )
                    } )
                }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({

    collections:selectCollectionsForPreview

});
export default connect(mapStateToProps)(CollectionsOverview);
