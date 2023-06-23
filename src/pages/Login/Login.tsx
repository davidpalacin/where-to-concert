import './login.css'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { fakeData } from '../../../fakeData'
import { useNavigate } from 'react-router-dom'

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	function handleClick() {
		const user = fakeData.users.find(user => user.email === email)
		if (!user) {
			alert('Invalid credentials')
			return
		}
		if (password === user.password) {
			navigate('/home')
		} else {
			alert('Invalid credentials')
		}
	}

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	}

	function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			handleClick()
		}
	}

	return (
		<div className="login">
			<h3>Login</h3>
			<div className="login-form">
				<label htmlFor="email">Email</label>
				<input type="text" onChange={handleEmailChange} />
				<label htmlFor="password">Password</label>
				<input type="password" onChange={handlePasswordChange} onKeyDown={handleKeyDown} />
			</div>
			<button onClick={handleClick} className='btnEnter'>
				Enter
			</button>
		</div>
	)
}