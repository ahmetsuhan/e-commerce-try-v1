import React, { Component } from 'react'
import ShopData from './shopData';

import CollectionPreview from '../../components/CollectionPreview/index';
class ShopPage extends Component {

    constructor(props){
        super(props);
        this.state={
            collections:ShopData
            
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map( ({id,...otherCollectionProps}) =>{
                        return(
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                        )
                    } )
                }
            </div>
        )
    }
}

export default ShopPage
