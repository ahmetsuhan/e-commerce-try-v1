import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/index';
import CollectionPage from '../CollectionPage/index';
import {connect} from 'react-redux';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebaseUtils';
import {updateCollections} from '../../redux/Shop/shopActions';


class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    
   this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async (snapshot) =>{
      const collectionsMap =  convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap)
    })
  }
        render(){
          const {match} = this.props;
          return (
            <div className="shop-page">
              <Route path={`${match.path}`} exact component ={CollectionsOverview}/>
              <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
        }
}
const mapDispatchToProps = (dispatch)=>{
return {
  updateCollections:(collectionsMap) => dispatch(updateCollections(collectionsMap))
}
}


export default connect(null,mapDispatchToProps)(ShopPage);
