import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';


const AddCategory = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();

    const saveCategory = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/category', {
                name,
                type
            });
            navigate("/category")
        }catch(error){
            console.log(error);
        }
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
            <Link to="/category" className='button'>Back</Link>
                <Form onSubmit={saveCategory}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter category name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter type name" value={type} onChange={(e)=> setType(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Category</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default AddCategory;
