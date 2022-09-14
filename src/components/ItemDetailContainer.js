import React from 'react';
import { getItem } from '../api/api';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem().then((item) => {
            setItem(item);
        })
            .catch(() => {
                console.log("Task error");
            })
    }, []);
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer