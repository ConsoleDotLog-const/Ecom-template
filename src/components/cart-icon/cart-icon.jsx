import React from 'react'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingCartIcon } from '../../assits/shopping-bag.svg'

const cartIcon = () => (
    <div className="cart-icon">
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="item-count"></span>
    </div>
)


export default cartIcon