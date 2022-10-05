import logo from '../assets/carrito.png'
import { useCartContext } from '../app/Provider';

const CartWidget = () => {
    const { cantidadItemFinal } = useCartContext();
    return (
        <>
            <img src={logo} className="logoCarrito" />
            <span className='carrito'>{cantidadItemFinal() || ''}</span>
        </>
    )
}

export default CartWidget;