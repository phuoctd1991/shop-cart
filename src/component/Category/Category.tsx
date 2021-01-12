import React from 'react'
import './Category.scss'

interface CategoryPros {
	title: string
	subTitle: string
	imageUrl: string
}
const Category: React.FC<CategoryPros> = ({ title, subTitle, imageUrl }) => {
	return (
		<div
			style={{
				backgroundImage: `url("${imageUrl}")`,
			}}
			className='menu-item'>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='sub-title'>{subTitle}</span>
			</div>
		</div>
	)
}

export default Category
