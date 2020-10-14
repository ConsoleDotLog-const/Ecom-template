import { createSelector } from 'reselect'

const selectShop = state =>  state.Shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)