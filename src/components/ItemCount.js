import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCounter] = useState(parseInt(initial))

    const decrement = () => {
        if (count == 0) return
        setCounter(count - 1)
    }
    const increment = () => {
        if (count >= stock) return

        setCounter(count + 1)
    }
    return (
        <div className='row'>
            <div className="col-3">

                <button onClick={() => decrement()} type="button" className="btn btn-dark">-</button>
                <h1>{count}</h1>
                <button onClick={() => increment()} type="button" className="btn btn-dark">+</button>

            </div>
        </div>
    )
}

export default ItemCount