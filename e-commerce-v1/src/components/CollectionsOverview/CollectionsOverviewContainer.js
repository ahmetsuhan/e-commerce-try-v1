import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/Shop/shopSelector";

import WithSpinner from "../WithSpinner";
import CollectionsOverview from ".";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
