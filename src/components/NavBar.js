import foto from '../assets/logoEcuPro.jpg';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
//import { CartWidget } from "./CartWidget";



const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/"><img src={foto} className="imagenLogo" /></Link>
                <Link className="btn btn-outline-primary" to="/category/games">Juegos</Link>
                <Link className="btn btn-outline-primary" to="/category/console">Consolas</Link>
                <Link className="btn btn-outline-primary" to="/category/audio">Audio</Link>
                <Link className="btn btn-outline-primary" to="/category/tv">Tv</Link>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;