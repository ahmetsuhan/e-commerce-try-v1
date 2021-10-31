import React from "react";
import CollectionItem from "../CollectionItem/index";
import { withRouter } from "react-router";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PrevievContainer,
} from "./collectionPreview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PrevievContainer>
        {items
          .filter((_, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PrevievContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
