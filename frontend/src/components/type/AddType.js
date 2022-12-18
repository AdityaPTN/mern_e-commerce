import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Header from '../Header.js';


const AddType = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const saveType = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/type', {
                name
            });
            navigate("/type")
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <Header />
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
                <Form onSubmit={saveType}>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter type name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Link to="/type" class='btn btn-success mx-2'>Back</Link>
                    <Button variant="primary" type="submit">Add Type</Button>
                </Form>
            </Row>
        </Container>
        </>
    );
}

export default AddType;
