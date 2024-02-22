import useFavourites from '../hooks/useFavourites';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

export function NavBar() {

    const { favourites } = useFavourites();

    return <header className="NavBar">
        <div className="logo logo-font"><Link to={''}>STREAMS+</Link></div>
        <div className="menu">
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'about'}>About</NavLink></li>
                <li><NavLink to={'favourites'}>Favourites ({favourites.length})</NavLink></li>
                <li><NavLink to={'signin'}>Sign In</NavLink></li>
            </ul>
        </div>
    </header>

}
