import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';


const EditType = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getTypeById();
    }, []);

    const getTypeById = async() => {
        const res = await axios.get(`http://localhost:5000/type/${id}`);
        setName(res.data.name);
    }

    const updateType = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/type/${id}`, {
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
                <Form onSubmit={updateType}>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter type name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Update Type</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default EditType;
