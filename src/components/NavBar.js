import useFavourites from '../hooks/useFavourites';
import './NavBar.css';
import { Link } from "react-router-dom";

export function NavBar(props) {

    const [favourites] = useFavourites();

    return <header className="NavBar">
        <div className="logo logo-font"><Link to={''}>STREAMS+</Link></div>
        <div className="menu">

            <ul>
                <li><Link to={'about'}>About</Link></li>
                <li><Link to={'favourites'}>Favourites ({favourites.length})</Link></li>
                <li><Link to={'signin'}>Sign In</Link></li>

            </ul>
        </div>
    </header>

}
