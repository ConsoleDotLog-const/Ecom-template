import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'

import './collections-overview.styles.scss'

import { selectCollections } from '../../redux/shop/shop.selectors'
import Collections from "../../components/preview-collection/preview-collection";

const CollectionsOverview = ({ collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
      <Collections key={id} {...otherCollectionProps} />
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)