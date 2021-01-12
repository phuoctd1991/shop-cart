import React, { Dispatch } from 'react'
import { AppState } from '../../../redux/reducer/RootReducer'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../../../model/Product'
import { BUTTON_TYPE, CART_ACTION } from '../../../util/Redux'
import CustomButton from '../../CustomButton/CustomButton'
import { CartAction } from '../../../redux/action/CartAction'
import './PreviewItem.scss'
interface PreviewItemPros {
	product: Product
}
const PreviewItem: React.FC<PreviewItemPros> = ({ product }) => {
	const { cartItems } = useSelector((state: AppState) => state.cart)
	const addToCardDispatch = useDispatch<Dispatch<CartAction>>()

	const onAddToCard = (item: Product) => {
		addToCardDispatch({ type: CART_ACTION.ADD_TO_CARD, payload: item })
	}
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${product.imgUrl})`,
				}}></div>
			<CustomButton
				btnType={BUTTON_TYPE.ADD_TO_CARD}
				text='Add to card'
				handleClick={onAddToCard}
				data={product}
			/>
			<div className='collection-footer'>
				<div className='name'>{product.name}</div>
				<div className='price'>${product.price}</div>
			</div>
		</div>
	)
}

export default PreviewItem
