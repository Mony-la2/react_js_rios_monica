
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <div className='container-nav'>

            <div>
                <ul>
                    <li><NavLink className='link-nav' to="/category/equipos">EcuPro</NavLink></li>
                    <li><NavLink className='link-nav' to="/category/funcionalidades">Funcionamiento</NavLink></li>
                    <li><NavLink className='link-nav' to="/category/cursos">Cursos/Presentación</NavLink></li>
                    <li><NavLink className='link-nav' to="/category/contactos">Contacto</NavLink></li>

                </ul>
            </div>
        </div>
    );
}

export default NavBar;