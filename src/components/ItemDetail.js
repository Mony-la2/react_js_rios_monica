import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const ItemDetail = ({ item }) => {

    console.log(item)
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
                </Card>
            </Row>
        </>
    )
}

export default ItemDetail