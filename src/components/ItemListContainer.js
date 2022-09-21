import { useEffect, useState } from "react";
import { getProductos } from "../api/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greetings }) => {
    const [productos, setProds] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        getProductos().then((prods) => {
            if (categoryId) {
                setProds(prods.filter(prod => prod.category === categoryId));
            } else {
                setProds(prods);
            }

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