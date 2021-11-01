import React from "react";

import "./collectionPage.scss";

import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { selectCollection } from "../../redux/Shop/shopSelector";
import CollectionItem from "../../components/CollectionItem";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collectionPage.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
