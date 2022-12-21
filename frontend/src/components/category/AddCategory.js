import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Header from '../Header.js';


const AddCategory = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const [types, setTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getTypes();
    }, []);

    const getTypes = async () => {
        const res = await axios.get('http://localhost:5000/type');
        setTypes(res.data);
    }

    const saveCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/category', {
                name,
                type
            });
            navigate("/category")
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeType = e => {
        console.log(e.target.value);
        setType(e.target.value);
    }

    return (
        <>
            <Header />
            <Container className="my-4">
                <Row className="justify-content-md-center mx-5">
                    <Form onSubmit={saveCategory}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter category name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <option selected>Select a Type</option>
                            <Form.Select value={type} onChange={handleChangeType}>
                                {types.map((type) => (
                                    <option key={type.value} value={type.value}>{type.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Link to="/category" class='btn btn-success mx-2'>Back</Link>
                        <button className="btn btn-primary" type="submit">Add Category</button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default AddCategory;
