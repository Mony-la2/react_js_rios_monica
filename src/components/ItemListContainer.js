import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCondition } from "./../app/api"
import loading from "../assets/Dual Ring-1s-200px.svg"


const ItemListContainer = ({ greetings }) => {
    const [productos, setProds] = useState();

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
    }, [categoryId]);

    return (
        <>
            <h2 className={"textoPrincipal"} >
                {greetings}
            </h2>

            {
                !productos ? <img src={loading} className="loading" />
                    : <ItemList items={productos} />
            }

        </>
    )
}

export default ItemListContainer;