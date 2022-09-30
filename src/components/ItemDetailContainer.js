import React from 'react';
import { getItem } from '../api/api';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getItems, getItemsDetails } from "./../app/api"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const { id } = useParams();

    useEffect(() => {


        getItemsDetails(id).then((item) => {
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