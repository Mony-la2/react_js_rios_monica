import ItemCount from "./ItemCount";


const ItemListContainer = ({ greetings }) => {
    return (
        <>
            <h2 className={"textoPrincipal"} >
                {greetings}
            </h2>

            <ItemCount stock="5" initial="1" />
        </>
    )
}

export default ItemListContainer;