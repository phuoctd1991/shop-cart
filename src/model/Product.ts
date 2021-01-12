export default class Product {
	id: number
	name: string
	imgUrl: string
	price: number
	constructor(id: number, name: string, imgUrl: string, price: number) {
		this.id = id
		this.name = name
		this.imgUrl = imgUrl
		this.price = price
	}
}
