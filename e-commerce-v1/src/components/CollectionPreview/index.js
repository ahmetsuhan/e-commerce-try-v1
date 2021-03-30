import React from 'react'
import CollectionItem from '../CollectionItem/index'

import {CollectionPreviewContainer, TitleContainer,PrevievContainer} from './collectionPreview.styles';
 
const CollectionPreview = ({title,items,history,match,routeName}) => {
    return (
        <CollectionPreviewContainer >
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</TitleContainer>
            <PrevievContainer>
                {
                    items.filter((item,index) => index<4)
                    .map((item)=>{
                        return(
                            <CollectionItem key={item.id} item={item} />
                        )
                    })    
                }
            </PrevievContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
