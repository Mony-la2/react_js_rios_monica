import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" className="btn btn-dark ms-3" onClick={handleShow}>
                Detalle
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.brand} {item.model} </Modal.Title>
                </Modal.Header>
                <Modal.Body><Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${item.pictureUrl}`} /></Modal.Body>
                <Modal.Body> {item.description} </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemDetail