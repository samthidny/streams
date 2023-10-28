import './NavBar.css';
import { Link } from "react-router-dom";

export function NavBar(props) {

    return <header className="NavBar">
        <nav className="navigation">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </nav>
        <div className="logo logo-font"><a href={`/`}>STREAMS+</a></div>
        <div className="menu">
            <Link to={'about'}>About</Link>
        </div>
    </header>

}
