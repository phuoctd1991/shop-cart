import React from 'react'
import Preview from '../../component/Preview/Preview'
import { MENU } from '../../util/Constant'
const Shop: React.FC = () => {
	const [preview, SetPreview] = React.useState(MENU)
	return (
		<div>
			{preview.map((item) => (
				<Preview item={item} />
			))}
		</div>
	)
}

export default Shop
