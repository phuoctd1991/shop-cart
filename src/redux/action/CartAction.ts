import Product from '../../model/Product'
import { CART_ACTION } from './../../util/Redux'
export interface IHidden {
	readonly type: CART_ACTION.TOGGLE_HIDDEN
}
export interface IAddToCard {
	readonly type: CART_ACTION.ADD_TO_CARD
	payload: Product
}
export interface IDeleteProductFormCart {
	readonly type: CART_ACTION.REMOVE_FORM_CART
	payload: Product
}

export interface IIncreaseQuantity {
	readonly type: CART_ACTION.INCREASE_QUANTITY
	payload: Product
}

export interface IDecreaseQuantity {
	readonly type: CART_ACTION.DECREASE_QUANTITY
	payload: Product
}

export type CartAction =
	| IHidden
	| IAddToCard
	| IDeleteProductFormCart
	| IIncreaseQuantity
	| IDecreaseQuantity
