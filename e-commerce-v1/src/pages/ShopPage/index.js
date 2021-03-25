import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/index';
import CollectionPage from '../CollectionPage/index';
const ShopPage = ({match}) =>  {

        return (
            <div className="shop-page">
              <Route path={`${match.path}`} exact component ={CollectionsOverview}/>
              <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
}



export default ShopPage;
