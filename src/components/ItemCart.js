import React from 'react';
import { useCartContext } from '../app/Provider';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';


const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

    return (
        <Row className='justify-content-center ms-4 my-4'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={`${product.pictureUrl}`} />
                <Card.Body>
                    <Card.Title>Marca: {product.brand}</Card.Title>
                    <Card.Text>
                        {product.model}
                    </Card.Text>
                    <Card.Text>
                        Cantidad: {product.quantity}
                    </Card.Text>
                    <Card.Text>
                        Precio: {product.price}
                    </Card.Text>
                    <Card.Text>
                        Subtotal: {product.quantity * product.price}
                    </Card.Text>
                </Card.Body>

                <button onClick={() => removeItem(product.id)} className="mb-4"
                >Eliminar</button>

            </Card>
        </Row>
    )
}

export default ItemCart;