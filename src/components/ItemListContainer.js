import { useEffect, useState } from "react";
import { getProductos } from "../api/api";
import ItemList from "./ItemList";


const ItemListContainer = ({ greetings }) => {
    const [productos, setProds] = useState([]);

    useEffect(() => {
        getProductos().then((prods) => {
            setProds(prods);
        })
            .catch(() => {
                console.log("Task error");
            })
    }, []);

    return (
        <>
            <h2 className={"textoPrincipal"} >
                {greetings}
            </h2>
            <ItemList items={productos} />
        </>
    )
}

export default ItemListContainer;