import React from 'react'
import { MenuItem } from '../../model/MenuItem'
import PreviewItem from './PreviewItem/PreviewItem'
import './Preview.scss'
interface PreviewPros {
	item: MenuItem
}
const Preview: React.FC<PreviewPros> = ({ item }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{item.title}</h1>
			<div className='preview'>
				{item.item?.map((i, index) => {
					if (index < 4) {
						return <PreviewItem key={i.name} product={i} />
					}
				})}
			</div>
		</div>
	)
}

export default Preview
