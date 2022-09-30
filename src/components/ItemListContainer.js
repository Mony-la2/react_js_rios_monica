import { useEffect, useState } from "react";
import { getProductos } from "../api/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCondition } from "./../app/api"


const ItemListContainer = ({ greetings }) => {
    const [productos, setProds] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

        if (categoryId) {
            getItemsByCondition(categoryId).then((prods) => {
                setProds(prods);
            })
                .catch(() => {
                    console.log("Task error");
                })
        } else {
            getItems().then((prods) => {
                setProds(prods);
            })
                .catch(() => {
                    console.log("Task error");
                })
        }
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