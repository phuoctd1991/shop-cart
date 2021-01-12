import React from 'react'
import { MenuItem } from '../../model/MenuItem'
import Category from '../Category/Category'
import './Categories.scss'
import { MENU } from '../../util/Constant'
const Categories: React.FC = () => {
	const [items, setItems] = React.useState<MenuItem[]>(MENU)

	return (
		<div className='directory-menu'>
			{items.map((item) => (
				<Category
					key={item.id}
					title={item.title}
					subTitle='Shop Now'
					imageUrl={item.imageUrl}
				/>
			))}
		</div>
	)
}

export default Categories
