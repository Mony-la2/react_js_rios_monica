import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../app/Provider'
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, precioFinal } = useCartContext();
    console.log(cart)
    return (
        <>
            {
                cart.length == 0 ? <h1>No hay productos <Link to='/'>Buscar Productos</Link></h1>
                    : cart.map(prod => <ItemCart product={prod} />)
            }

            <h2>
                Total:$ {precioFinal()}
            </h2>

        </>
    )
}

export default Cart