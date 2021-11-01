import React from "react";
import CollectionItem from "../CollectionItem/index";
import { useHistory } from "react-router";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PrevievContainer,
} from "./collectionPreview.styles";

const CollectionPreview = ({ title, items, match, routeName }) => {
  const history = useHistory();

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

export default CollectionPreview;
