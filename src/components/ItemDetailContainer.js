import React from 'react';
import { getItem } from '../api/api';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getItem().then((items) => {
            setItem(items.find(item => item.id === parseInt(id)));
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