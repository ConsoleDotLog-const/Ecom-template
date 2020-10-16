import React from "react";
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionsPage from '../collection/collection'

const ShopPage = ({ match }) => {
  console.log(match)
  return(
  <div className="shop-page">
       <Route  exact path = {`${match.path}`} component = {CollectionsOverview} />
       <Route  path={`${match.path}/:categoryId`} component={CollectionsPage}/>
  </div>
)};



export default ShopPage;
