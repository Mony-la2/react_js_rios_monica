import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCounter] = useState(parseInt(initial));

    const decrement = () => {
        if (count === 0) return
        setCounter(count - 1)
    }
    const increment = () => {
        if (count >= stock) return

        setCounter(count + 1)
    }
    return (
        <div className="m-auto">
            <div className="px-2 py-2 d-flex justify-content-center">
                <button onClick={() => decrement()} type="button" className="btn btn-dark">-</button>
                <p className="m-1 p-1">{count} </p>
                <button onClick={() => increment()} type="button" className="btn btn-dark">+</button>
                <button onClick={() => onAdd(count)} type="button" className="btn btn-dark ms-3">Agregar carrito</button>

                {/* <ItemDetailContainer /> */}
            </div>
        </div>
    )
}

export default ItemCount