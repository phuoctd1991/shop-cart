import Product from './Product'

export class MenuItem {
	id: number
	title: string
	imageUrl: string
	linkUrl: string
	item?: Product[]
	constructor(
		id: number,
		title: string,
		imageUrl: string,
		linkUrl: string,
		item?: Product[]
	) {
		this.id = id
		this.title = title
		this.imageUrl = imageUrl
		this.linkUrl = linkUrl
		if (item) {
			this.item = item
		} else this.item = []
	}
}
