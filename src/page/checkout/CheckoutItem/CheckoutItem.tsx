import React, { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import Product from '../../../model/Product'
import ProductSelection from '../../../model/ProductSelection'
import { CartAction } from '../../../redux/action/CartAction'
import { CART_ACTION } from '../../../util/Redux'
import './CheckoutItem.scss'
interface CheckoutItemPros {
	item: ProductSelection
}
const CheckoutItem: React.FC<CheckoutItemPros> = ({ item }) => {
	const removeProductDispatch = useDispatch<Dispatch<CartAction>>()
	const increaseQuantityDispatch = useDispatch<Dispatch<CartAction>>()
	const decreaseQuantityDispatch = useDispatch<Dispatch<CartAction>>()

	const removeProduct = (product: Product) => {
		removeProductDispatch({
			type: CART_ACTION.REMOVE_FORM_CART,
			payload: product,
		})
	}

	const increaseQuantity = (product: Product) => {
		increaseQuantityDispatch({
			type: CART_ACTION.INCREASE_QUANTITY,
			payload: product,
		})
	}
	const decreaseQuantity = (product: Product) => {
		decreaseQuantityDispatch({
			type: CART_ACTION.DECREASE_QUANTITY,
			payload: product,
		})
	}
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={item.product.imgUrl} alt='cover' />
			</div>
			<span className='name'>{item.product.name}</span>
			<span className='quantity'>
				<span className='arrow' onClick={() => decreaseQuantity(item.product)}>
					&#10094;
				</span>
				{item.num}
				<span className='arrow' onClick={() => increaseQuantity(item.product)}>
					&#10095;
				</span>
			</span>
			<span className='price'>{item.product.price}</span>
			<div
				className='remove-button'
				onClick={() => removeProduct(item.product)}>
				&#10005;
			</div>
		</div>
	)
}
export default CheckoutItem
