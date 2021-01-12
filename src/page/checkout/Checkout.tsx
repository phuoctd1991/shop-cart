import React, { Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducer/RootReducer'
import './Checkout.scss'
import CheckoutItem from './CheckoutItem/CheckoutItem'

const headers: String[] = [
	'Product',
	'Description',
	'Quantity',
	'Price',
	'Remove',
]
const Checkout: React.FC = () => {
	const { cartItems } = useSelector((state: AppState) => state.cart)
	const total = cartItems.reduce(
		(count, item) => (count += item.num * item.product.price),
		0
	)
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				{headers.map((i) => (
					<div className='header-block'>
						<span>{i}</span>
					</div>
				))}
			</div>
			{cartItems.map((i) => (
				<CheckoutItem item={i}></CheckoutItem>
			))}
			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	)
}

export default Checkout
