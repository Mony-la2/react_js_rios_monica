
import React, { useState } from 'react';
import { useContext } from 'react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, quantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: quantity });
        setCart(newCart);
    }

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const clear = () => setCart([]);
    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id))

    const precioFinal = () => {
        return cart.reduce((a, b) => a + b.quantity * b.price, 0);
    };

    const cantidadItemFinal = () => cart.reduce((a, b) => a + b.quantity, 0);

    console.log("compras ", cart);


    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            clear,
            removeItem,
            precioFinal,
            cantidadItemFinal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default Provider;
