import React from 'react'
import { useCartContext } from '../app/Provider'

const Cart = () => {
    const { cart } = useCartContext();

    return (
        <>
            <div>Compra realizada</div>
        </>
    )
}

export default Cart