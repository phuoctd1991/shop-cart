import React from 'react'
import ProductSelection from '../../../model/ProductSelection'
import './CartItem.scss'
interface CartItemPros {
	item: ProductSelection
}
const CartItem: React.FC<CartItemPros> = ({ item }) => {
	return (
		<div className='cart-item'>
			<img src={item.product.imgUrl} alt='item'></img>
			<div className='item-details'>
				<span className='name'>{item.product.name}</span>
				<span className='price'>{`${item.num} x ${item.product.price}`}</span>
			</div>
		</div>
	)
}

export default CartItem
