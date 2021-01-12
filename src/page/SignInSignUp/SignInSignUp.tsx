import React from 'react'
import SignInComponent from '../../component/SignIn/SignIn'
import { LoginForm } from '../../model/LoginForm'
import './SignInSignUp.scss'
const SignInSignUp: React.FC = () => {
	return (
		<div className='container'>
			<div className='sign-up'>
				<SignInComponent />
			</div>
		</div>
	)
}

export default SignInSignUp
