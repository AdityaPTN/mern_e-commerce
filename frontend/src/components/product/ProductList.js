import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Table } from 'react-bootstrap';
import Header from '../Header.js';

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const res = await axios.get('http://localhost:5000/product');
        setProduct(res.data);
    }

    const deleteProduct = async (id) => {
        try {
            axios.delete(`http://localhost:5000/product/${id}`);
            getProducts();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            <Container className="my-4">
                <Link to="add" class='btn btn-success my-2 mx-2'>Add Product</Link>
                <Row className="justify-content-md-center mx-2">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr class="text-center">
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(products)}
                            {products.map((product, index) => (
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={`http://localhost:5000/${product.image}`} alt="#" width="50" /></td>
                                    <td>{product.name}</td>
                                    <td>Rp. {product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Link to={`edit/${product._id}`} class="btn btn-primary mx-2">Edit</Link>
                                        <Button onClick={() => deleteProduct(product._id)} variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    );
}

export default ProductList;
