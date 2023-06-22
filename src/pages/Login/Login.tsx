import './login.css'
import { useState } from 'react'
import { fakeData } from '../../../fakeData'

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleClick() {
		const user = fakeData.users.find(user => user.email === email)

		if (!user) {
			alert('user not found')
			throw new Error('User not found')
		}

		if (password === user.password) {
			alert(`Welcome ${user.name}`)
		}

	}

	function handleEmailChange(e: any) {
		setEmail(e.target.value)
	}

	function handlePasswordChange(e: any) {
		setPassword(e.target.value)
	}

	return (
		<div className="login">
			<h3>Login</h3>
			<div className="login-form">
				<label htmlFor="email">Email</label>
				<input type="text" onChange={handleEmailChange} />
				<label htmlFor="password">Password</label>
				<input type="password" onChange={handlePasswordChange} />
			</div>
			<button onClick={handleClick} className='btnEnter'>
				Enter
			</button>
		</div>
	)
}