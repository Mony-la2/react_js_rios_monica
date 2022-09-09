import React from 'react'
import { useEffect, useState } from 'react';

const Item = ({ item }) => {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        console.log("diego", item);
        setProd(item);
    }, [])

    return (
        <div> {prod.title} {prod.price} </div>
    )
}

export default Item  