import React, { Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartAction } from '../../redux/action/CartAction'
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import './CartIcon.scss'
import { CART_ACTION } from '../../util/Redux'
import { AppState } from '../../redux/reducer/RootReducer'
interface CartIconPros {}

const CartIcon: React.FC<CartIconPros> = () => {
	const { cartItems } = useSelector((state: AppState) => state.cart)
	const num = cartItems.reduce((count, item) => (count += item.num), 0)
	const hiddenDispatch = useDispatch<Dispatch<CartAction>>()

	const cartIconClicked = () => {
		hiddenDispatch({ type: CART_ACTION.TOGGLE_HIDDEN })
	}
	console.log('cart icon')
	return (
		<div className='cart-icon' onClick={cartIconClicked}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{num}</span>
		</div>
	)
}
export default CartIcon
