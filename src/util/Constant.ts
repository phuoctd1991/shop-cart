import { MenuItem } from '../model/MenuItem'
import Product from '../model/Product'

const HAT_ITEM: Product[] = [
	new Product(1, 'Brown Brim', '/image/shop-img/hats/brown-brim.png', 25),
	new Product(2, 'Blue Beanie', '/image/shop-img/hats/blue-beanie.png', 18),
	new Product(3, 'Brown Cowboy', '/image/shop-img/hats/brown-cowboy.png', 35),
	new Product(4, 'Grey Brim', '/image/shop-img/hats/grey-brim.png', 25),
	new Product(5, 'Green Beanie', '/image/shop-img/hats/green-beanie.png', 9),
	new Product(6, 'Palm Tree Cap', '/image/shop-img/hats/palm-tree-cap.png', 27),
	new Product(7, 'Red Beanie', '/image/shop-img/hats/red-beanie.png', 15),
	new Product(8, 'Wolf Cap', '/image/shop-img/hats/wolf-cap.png', 41),
	new Product(9, 'Blue Snapback', '/image/shop-img/hats/blue-snapback.png', 43),
]

const HAT_MENU = new MenuItem(
	1,
	'hats',
	'/image/hats.png',
	'shop/hats',
	HAT_ITEM
)

const JACKET_ITEM: Product[] = [
	new Product(
		1,
		'Black Shearling',
		'/image/shop-img/jackets/black-shearling.png',
		55
	),
	new Product(
		2,
		'Blue Jean Jacket',
		'/image/shop-img/jackets/blue-jean-jacket.png',
		51
	),
	new Product(
		3,
		'Brown Shearling',
		'/image/shop-img/jackets/brown-shearling.png',
		77
	),
	new Product(
		4,
		'Brown Trench',
		'/image/shop-img/jackets/brown-trench.png',
		25
	),
	new Product(
		5,
		'Grey Jean Jacket',
		'/image/shop-img/jackets/grey-jean-jacket.png',
		65
	),
]
const JACKET_MENU = new MenuItem(
	2,
	'jackets',
	'/image/jackets.png',
	'shop/jacket',
	JACKET_ITEM
)
const SNEACKER_ITEM: Product[] = [
	new Product(1, 'Adidas NMD', '/image/shop-img/sneakers/adidas-nmd.png', 25),
	new Product(
		2,
		'Black Converse',
		'/image/shop-img/sneakers/black-converse.png',
		80
	),
	new Product(3, 'Nike Brown', '/image/shop-img/sneakers/nike-brown.png', 45),
	new Product(4, 'Nike Funky', '/image/shop-img/sneakers/nike-funky.png', 125),
	new Product(5, 'Nikes Red', '/image/shop-img/sneakers/nikes-red.png', 95),
	new Product(
		6,
		'Timberlands',
		'/image/shop-img/sneakers/timberlands.png',
		225
	),
	new Product(
		7,
		'White Nike High Tops',
		'/image/shop-img/sneakers/white-nike-high-tops.png',
		58
	),
	new Product(8, 'Yeezy', '/image/shop-img/sneakers/yeezy.png', 250),
]

const SNEAKER_MENU = new MenuItem(
	3,
	'sneakers',
	'/image/sneakers.png',
	'shop/sneakers',
	SNEACKER_ITEM
)

const WOMEN_ITEM: Product[] = [
	new Product(1, 'Blue Tank', '/image/shop-img/womens/blue-tank.png', 15),
	new Product(
		2,
		'Floral Blouse',
		'/image/shop-img/womens/floral-blouse.png',
		151
	),
	new Product(3, 'Floral Skirt', '/image/shop-img/womens/floral-skirt.png', 31),
	new Product(
		4,
		'Red Polka Dot Dress',
		'/image/shop-img/womens/red-polka-dot-dress.png',
		35
	),
	new Product(
		5,
		'Striped Sweater',
		'/image/shop-img/womens/striped-sweater.png',
		66
	),
	new Product(6, 'White Vest', '/image/shop-img/womens/white-vest.png', 41),
	new Product(
		7,
		'Yellow Track Suit',
		'/image/shop-img/womens/yellow-track-suit.png',
		100
	),
]
const WOMEN_MENU = new MenuItem(
	4,
	'womens',
	'/image/womens.png',
	'shop/women',
	WOMEN_ITEM
)
const MEN_ITEM: Product[] = [
	new Product(1, 'Camo Vest', '/image/shop-img/mens/camo-vest.png', 41),
	new Product(2, 'Floral Shirt', '/image/shop-img/mens/floral-shirt.png', 71),
	new Product(3, 'Long Sleeve', '/image/shop-img/mens/long-sleeve.png', 81),
	new Product(4, 'Pink Shirt', '/image/shop-img/mens/pink-shirt.png', 18),
	new Product(
		5,
		'Polka Dot Shirt',
		'/image/shop-img/mens/polka-dot-shirt.png',
		21
	),
	new Product(
		6,
		'Roll Up Jean Shirt',
		'/image/shop-img/mens/roll-up-jean-shirt.png',
		41
	),
]

const MEN_MENU = new MenuItem(5, 'mens', '/image/men.png', 'shop/men', MEN_ITEM)
export const MENU = [HAT_MENU, JACKET_MENU, SNEAKER_MENU, WOMEN_MENU, MEN_MENU]
