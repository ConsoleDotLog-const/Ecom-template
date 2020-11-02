import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'

import './collections-overview.styles.jsx'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from "../../components/preview-collection/preview-collection";
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);