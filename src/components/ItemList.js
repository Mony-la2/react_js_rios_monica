import React from 'react'
import Item from './Item';
import CardGroup from 'react-bootstrap/CardGroup';


const ItemList = ({ items }) => {
    return (
        <CardGroup>
            {items.map((prod) => {
                return (
                    <Item key={prod.id} item={prod} />
                )

            })}
        </CardGroup>
    )
}

export default ItemList