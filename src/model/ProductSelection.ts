import Product from './Product'

class ProductSelection {
	id: number
	num: number
	product: Product
	constructor(id: number, num: number, products: Product) {
		this.id = id
		this.num = num
		this.product = products
	}
}
export default ProductSelection
