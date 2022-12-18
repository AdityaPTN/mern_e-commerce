import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Header from '../Header.js';

const EditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        getCategories();
        getProductById();
    },[]);

    const getCategories = async() => {
        const res = await axios.get('http://localhost:5000/category');
        setCategories(res.data);
    }

    const getProductById = async() => {
        const res = await axios.get(`http://localhost:5000/product/${id}`);
        setName(res.data.name);
        setPrice(res.data.price);
        setStock(res.data.stock);
        setDescription(res.data.description);
        setCategory(res.data.category);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/product/${id}`, {
                name,
                price,
                stock,
                description,
                category
            });
            navigate("/product")
        }catch(error){
            console.log(error);
        }
    }

    const handleChangeCategory = e => {
        console.log(e.target.value);
        setCategory(e.target.value);
    }

    return (
        <>
        <Header />
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
                <Form onSubmit={updateProduct}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter product price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" placeholder="Enter product stock" value={stock} onChange={(e)=> setStock(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={category} onChange={handleChangeCategory}>
                            {categories.map((category)=> (
                                <option key={category.value} value={category.value}>{category.name}</option>
                                ))}
                        </Form.Select>
                    </Form.Group>
                    <Link to="/product" class='btn btn-success mx-2'>Back</Link>
                    <Button variant="primary" type="submit">Update Product</Button>
                </Form>
            </Row>
        </Container>
        </>
    );
}

export default EditProduct;
