import React, { useEffect } from 'react'
import './App.css'
import HomePage from './page/home/Home'
import { Route, Switch } from 'react-router-dom'
import HatPage from './page/hatpage/HatPage'
import Shop from './page/shop/Shop'
import Header from './component/Header/Header'
import SignIn from './page/SignInSignUp/SignInSignUp'
import Checkout from './page/checkout/Checkout'
const App: React.FC = () => {
	useEffect(() => {
		console.log('mounted')
	})
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hat' component={HatPage} />
				<Route exact path='/shop' component={Shop} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/checkout' component={Checkout} />
			</Switch>
		</div>
	)
}

export default App
