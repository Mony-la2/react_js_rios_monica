import React from 'react'
import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount";


const Item = ({ item }) => {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        setProd(item);
    }, [])

    const onAdd = (count) => {
        console.log(count)
    }

    return (
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
    )
}

export default Item  