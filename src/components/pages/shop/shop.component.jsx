import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }

    render(){
        const collections = this.state.collection;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherSectionProps}) => (
                        <CollectionPreview key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;