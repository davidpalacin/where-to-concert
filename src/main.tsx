import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/Main/MainPage'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<MainPage />} />
		</Routes>
	</Router>
)
