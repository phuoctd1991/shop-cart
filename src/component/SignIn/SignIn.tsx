import React from 'react'
import { LoginForm } from '../../model/LoginForm'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './SignIn.scss'
import { BUTTON_TYPE } from '../../util/Redux'
const SignInComponent: React.FC = () => {
	const [loginForm, setLoginForm] = React.useState<LoginForm>()
	const onLogin = (event: any) => {
		event.preventDefault()
	}
	const onChange = (event: any) => {
		const { name, value } = event.target
		let clone: any = { ...loginForm }
		clone[name] = value
		setLoginForm(clone as LoginForm)
	}
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={(event) => onLogin(event)}>
				<FormInput
					name='email'
					type='email'
					handleChange={onChange}
					label='EMAIL'
				/>
				<FormInput
					name='password'
					type='password'
					label='PASSWORD'
					handleChange={onChange}
				/>
				<CustomButton
					btnType={BUTTON_TYPE.SIGN_IN}
					type='submit'
					text='Submit Form'></CustomButton>
			</form>
		</div>
	)
}

export default SignInComponent
