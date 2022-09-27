import React from 'react'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        setProd(item);
    }, [])

    return (
        <>
            <Row className='justify-content-center ms-4 my-4'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${prod.pictureUrl}`} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                            {prod.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{prod.category}</ListGroup.Item>
                        <ListGroup.Item>${prod.price}</ListGroup.Item>
                    </ListGroup>

                    <Link to={`/item/${prod.id}`} type="button" className="btn btn-dark ms-3">Detalle</Link>
                </Card>
            </Row>
        </>
    )
}

export default Item  