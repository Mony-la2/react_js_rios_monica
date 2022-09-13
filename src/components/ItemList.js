import React from 'react'
import Item from './Item';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';


const ItemList = ({ items }) => {
    return (
        <CardGroup>
            {
                items.map((prod) => {
                    return <>
                        <Row className='justify-content-center ms-4 my-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${prod.pictureUrl}`} />
                                <Card.Body>
                                    <Card.Title>{prod.name}</Card.Title>
                                    <Card.Text>
                                        {prod.description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>${prod.price}</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Item item={prod} />
                                </Card.Body>
                            </Card>
                        </Row>

                    </>
                })
            }
        </CardGroup>
    )
}

export default ItemList