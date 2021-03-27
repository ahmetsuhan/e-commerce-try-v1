import React from 'react'
import './collectionPreview.scss';
import CollectionItem from '../CollectionItem/index'

const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((index) => index<4)
                    .map((item)=>{
                        return(
                            <CollectionItem key={item.id} item={item} />
                        )
                    })    
                }
            </div>
        </div>
    )
}

export default CollectionPreview
