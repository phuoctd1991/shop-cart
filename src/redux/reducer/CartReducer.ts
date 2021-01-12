import Product from '../../model/Product'
import { CART_ACTION } from '../../util/Redux'
import { CartAction } from '../action/CartAction'
import ProductSelection from '../../model/ProductSelection'
type CartState = {
	hidden: boolean
	cartItems: ProductSelection[]
}

const initialState: CartState = {
	hidden: true,
	cartItems: [],
}

const CartReducer = (state: CartState = initialState, action: CartAction) => {
	switch (action.type) {
		case CART_ACTION.TOGGLE_HIDDEN: {
			return {
				...state,
				hidden: !state.hidden,
			}
		}
		case CART_ACTION.ADD_TO_CARD: {
			const item = action.payload as Product
			let carts = [...state.cartItems]
			let isExisted: boolean = false
			for (let it of carts) {
				if (it.id === item.id) {
					isExisted = true
					it.num++
				}
			}
			if (!isExisted) carts.push(new ProductSelection(item.id, 1, item))

			return {
				...state,
				cartItems: carts,
			}
		}

		case CART_ACTION.REMOVE_FORM_CART: {
			const item = action.payload as Product
			let carts = [...state.cartItems]
			const i = carts.findIndex((i) => i.id === item.id)
			carts.splice(i, 1)
			return {
				...state,
				cartItems: carts,
			}
		}

		case CART_ACTION.DECREASE_QUANTITY: {
			const item = action.payload as Product
			let carts = [...state.cartItems]
			let removed = -1
			carts.forEach((i) => {
				if (i.id === item.id) {
					i.num--
					if (i.num === 0) removed = i.id
				}
			})
			if (removed !== -1) {
				const i = carts.findIndex((i) => i.id === removed)
				carts.splice(i, 1)
			}
			return {
				...state,
				cartItems: carts,
			}
		}

		case CART_ACTION.INCREASE_QUANTITY: {
			const item = action.payload as Product
			let carts = [...state.cartItems]
			console.log(
				'🚀 ~ file: CartReducer.ts ~ line 75 ~ CartReducer ~ carts',
				carts
			)
			carts.forEach((i) => {
				if (i.id === item.id) i.num++
			})
			return {
				...state,
				cartItems: carts,
			}
		}

		default:
			return state
	}
}

export default CartReducer
