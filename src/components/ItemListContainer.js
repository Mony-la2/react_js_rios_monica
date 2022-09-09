import { useEffect, useState } from "react";
import { getProductos } from "../api/api";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = ({ greetings }) => {
    const [productos, setProds] = useState([]);

    useEffect(() => {
        getProductos().then((prods) => {
            console.log("task", prods);
            setProds(prods);
            console.log("productos", productos);
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
            <ItemCount stock="5" initial="1" />
        </>
    )
}

export default ItemListContainer;