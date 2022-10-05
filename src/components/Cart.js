import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../app/Provider'
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createItem } from "./../app/api"

const Cart = () => {
    const { cart, precioFinal } = useCartContext();
    const [form, setForm] = useState({
        formName: '',
        formPhone: '',
        formEmail: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    }

    const comprar = () => {

        let obj = {
            buyer: {
                name: form.formName,
                phone: form.formPhone,
                email: form.formEmail
            },
            items: cart
        }

        createItem(obj).then((id) => {
            alert("El id de compra es: " + id)
        })
            .catch(() => {
                console.log("Error de compra");
            })

    }

    return (
        <>

            {
                cart.length == 0 ? <h1>No hay productos <Link to='/'>Buscar Productos</Link></h1>
                    : cart.map(prod => <ItemCart product={prod} />)
            }
            <div className="row justify-content-center mb-4">
                <div className='col-4'>

                    <h4>
                        Total:$ {precioFinal()}
                    </h4>

                </div>
            </div>
            <div className="row justify-content-center mb-4">
                <div className='col-4'>
                    <h4>Formulario de Compra</h4>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="formName" value={form.formName} onChange={handleChange} type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="formPhone" value={form.formPhone} onChange={handleChange} type="tel" placeholder="Enter phone" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="formEmail" value={form.formEmail} onChange={handleChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" onClick={() => comprar()} >
                            Comprar
                        </Button>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default Cart