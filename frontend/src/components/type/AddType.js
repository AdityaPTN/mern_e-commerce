import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';


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
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
            <Link to="/type" className='button'>Back</Link>
                <Form onSubmit={saveType}>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter type name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Type</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default AddType;
