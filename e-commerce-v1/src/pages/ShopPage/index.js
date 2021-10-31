// import React from "react";
// import { Route } from "react-router-dom";
// import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
// import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";
// import { connect } from "react-redux";

// import { fetchCollectionsStartAsync } from "../../redux/Shop/shopActions";

// class ShopPage extends React.Component {
//   componentDidMount() {
//     const { fetchCollections } = this.props;
//     fetchCollections();
//   }
//   render() {
//     const { match } = this.props;

//     return (
//       <div className="shop-page">
//         <Route
//           path={`${match.path}`}
//           exact
//           component={CollectionsOverviewContainer}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           component={CollectionPageContainer}
//         />
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
// });

// export default connect(null, mapDispatchToProps)(ShopPage);

/**
 *
 * SAGA IMPLEMENTATION PART
 *
 *
 */

import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/Shop/shopActions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          path={`${match.path}`}
          exact
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
