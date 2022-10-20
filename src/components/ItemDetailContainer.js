import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getItems, getItemsDetails } from "./../app/api";
import loading from "../assets/Dual Ring-1s-200px.svg"

const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const { id } = useParams();

    useEffect(() => {


        getItemsDetails(id).then((item) => {
            setItem(item);
        })
            .catch(() => {
                console.log("Task error");
            })
    }, [id]);
    return (
        <>
            {
                !item ? <img src={loading} className="loading" />
                    : < ItemDetail item={item} />
            }
        </>

    )
}

export default ItemDetailContainer