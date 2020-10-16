import React from 'react'
// import { connect } from 'react-redux'
 
// import CollectionItem from '../../components/collection-item/collection-item'
// import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = ({ match  }) => {
   console.log( match.params.collectionId ) 
    return (
      <div className='collection-page'>
        <h2 className='title'>Collections page</h2>
      </div>
    );
  };
  
  export default CollectionPage;