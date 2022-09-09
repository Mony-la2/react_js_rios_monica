import React from 'react'
import { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = (items) => {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        console.log("mony", items);
        setProds(items);
    }, [])

    return (
        <div>
            {
                prods.map((prod) => {
                    console.log("mony", prod)
                    return <Item item={prod} />
                })
            }
        </div>
    )
}

export default ItemList