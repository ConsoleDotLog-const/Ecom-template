import React from "react";

import CollectionsOverview from '../../components/collections-overview/collections-overview'


const ShopPage = ({ collections }) => (
  <div className="shop-page">
      <CollectionsOverview collections={collections}/>
  </div>
);



export default ShopPage;
