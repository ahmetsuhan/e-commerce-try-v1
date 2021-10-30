import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/index";
import CollectionPage from "../CollectionPage/index";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionFetchin,
  selectIsCollectionsLoaded,
} from "../../redux/Shop/shopSelector";

import WithSpinner from "../../components/WithSpinner/index";

import { fetchCollectionsStartAsync } from "../../redux/Shop/shopActions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }
  render() {
    const {
      match,
      isCollectionFetching: loading,
      isCollectionsLoaded,
    } = this.props;
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
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetchin,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
