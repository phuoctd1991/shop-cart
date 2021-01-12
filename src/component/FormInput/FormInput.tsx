import React from 'react'
import './FormInput.scss'
interface FormInputPros {
	label: string
	name: string
	type: string
	handleChange: (event: any) => void
}

const FormInput: React.FC<FormInputPros> = ({
	label,
	name,
	type,
	handleChange,
}) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				onChange={handleChange}
				name={name}
				type={type}
			/>
			{name ? (
				<label className={`shrink form-input-label`}>{label}</label>
			) : (
				{ label }
			)}
		</div>
	)
}

export default FormInput
