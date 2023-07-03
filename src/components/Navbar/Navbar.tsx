import { getUser } from '../../utils/getUser'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const user = getUser()
    const navigate = useNavigate()

    function handleLogout() {
        navigate('/')
    }

    return (
        <nav className='navbar'>
            <div className="navbar-item">Inicio</div>
            <div className="navbar-item">Compartir evento</div>
            <div className="navbar-item navbar-username" onClick={handleLogout}>{user.name}</div>
        </nav>
    )
}
