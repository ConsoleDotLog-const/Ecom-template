import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions' 

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingCartIcon } from '../../assits/shopping-bag.svg'

const cartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="item-count"></span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps) (cartIcon)