import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../asset/crown.svg'
import { Link } from 'react-router-dom'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
const Header: React.FC = () => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP PHUOCTD
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
				<CartIcon />
			</div>
			<CartDropdown />
		</div>
	)
}

export default Header
