import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';
import { useCartContext } from '../app/Provider'
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const { agregarAlCarrito } = useCartContext();


    const onAdd = (counter) => {
        setCount(counter)
        agregarAlCarrito(item, counter)
        console.log(counter)
    }
    return (
        <>

            <Row className='justify-content-center ms-4 my-4'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${item.pictureUrl}`} />
                    <Card.Body>
                        <Card.Title>{item.brand}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{item.model}</ListGroup.Item>
                    </ListGroup>
                    {
                        count === 0 ?
                            <ItemCount stock="5" initial="1" onAdd={onAdd} />
                            : <Link to='/Cart'>Terminar compra</Link>
                    }

                </Card>
            </Row>
        </>
    )
}

export default ItemDetail