import logo from '../assets/carrito.png'
import { useCartContext } from '../app/Provider';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadItemFinal } = useCartContext();
    return (
        <Link to='/Cart'>
            <img src={logo} className="logoCarrito">
            </img>
            <span className='carrito'>{cantidadItemFinal() || ''}</span>
        </Link>
    )
}

export default CartWidget;