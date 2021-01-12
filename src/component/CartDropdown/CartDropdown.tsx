import React, { Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducer/RootReducer'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import { BUTTON_TYPE, CART_ACTION } from '../../util/Redux'
import CartItem from './CartItem/CartItem'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { CartAction } from '../../redux/action/CartAction'

interface CartDropdownPros extends RouteComponentProps {}
const CartDropdown: React.FC<CartDropdownPros> = ({ history }) => {
	const { hidden, cartItems } = useSelector((state: AppState) => state.cart)
	const toggleHandleDispatch = useDispatch<Dispatch<CartAction>>()
	const show = hidden ? 'display-none' : 'display-block'
	console.log('cart dropdown')
	const onGoToCheckout = () => {
		history.push('/checkout')
		toggleHandleDispatch({ type: CART_ACTION.TOGGLE_HIDDEN })
	}
	return (
		<div className={`cart-dropdown ${show}`}>
			<div className='cart-items'>
				{cartItems.length !== 0 ? (
					cartItems.map((i) => <CartItem item={i} />)
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				btnType={BUTTON_TYPE.SIGN_IN}
				text='GO TO CHECKOUT'
				handleClick={onGoToCheckout}></CustomButton>
		</div>
	)
}

export default withRouter(CartDropdown)
