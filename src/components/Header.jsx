import { NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"

export const Header = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const disconnect = () => {
        sessionStorage.clear();
        navigate("/login");
    }

    return(
        <header className="App-header">
            {/* Menu de mon application, j'utilise des NavLink et non des Link car cela me permet d'accéder à la propriété isActive */}
            {/* isActive me permet de savoir s'il s'agit du lien courant ou non, j'affecte donc une classe active si c'est le cas, inactive sinon */}
            {/* Si vous n'en avez pas l'utilité, vous pouvez très bien utiliser Link directement */}
            <nav>
                <ul>
                    <li>
                        <NavLink to="/tp1" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp2" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp3" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP3</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp4" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP4</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp5" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP5</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp6" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP6</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp7" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP7</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp8" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP8</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp16" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>TP16</NavLink>
                    </li>
                    {token && 
                        <li>
                            <button onClick={disconnect}>Déconnexion</button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}
