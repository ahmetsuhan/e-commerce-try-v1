import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/index";
import CollectionPage from "../CollectionPage/index";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebaseUtils";
import { updateCollections } from "../../redux/Shop/shopActions";
import WithSpinner from "../../components/WithSpinner/index";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          path={`${match.path}`}
          exact
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
