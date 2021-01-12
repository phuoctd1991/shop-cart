import React from 'react'
import './CustomButton.scss'
import { BUTTON_TYPE } from '../../util/Redux'
interface CustomButtonPros
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	btnType: BUTTON_TYPE
	handleClick?: (item: any) => void
	data?: any
}
const CustomButton: React.FC<CustomButtonPros> = ({
	text,
	btnType,
	type,
	handleClick,
	data,
	...pros
}) => {
	let btnStyle
	switch (btnType) {
		case BUTTON_TYPE.ADD_TO_CARD:
			btnStyle = 'add-to-card'
			break
		case BUTTON_TYPE.SIGN_IN:
			break
	}
	return (
		<button
			type={type}
			className={`custom-button ${btnStyle}`}
			onClick={() => (handleClick ? handleClick(data || null) : '')}>
			{text}
		</button>
	)
}

export default CustomButton
