import React from 'react'

import SHOP_DATA from './shop.data'

import Collections from '../../components/preview-collection/preview-collection'

class ShopPage extends React.Component{
    constructor(props){
       super()

        this.state = {
            collection : SHOP_DATA
        }  
    } 
    
    render(){
        const { collections } = this.state ;
        return (<div className="shop-page">
            {
                 collections.map(({id, ...otherCollectionProps}) =>(
                    <Collections key={id} {...otherCollectionProps}/>
                ))}
        </div> )
            
        
    }
}

export default ShopPage;