import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Table } from 'react-bootstrap';

const TypeList = () => {
    const [types, setType] = useState([]);

    useEffect(()=> {
        getTypes();
    },[]);

    const getTypes = async() => {
        const res = await axios.get('http://localhost:5000/type');
        setType(res.data);
    }

    const deleteType = async(id) =>{
        try{
            await axios.delete(`http://localhost:5000/type/${id}`);
            getTypes();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container className="my-4">
            <Link to="add" class='btn btn-success my-2 mx-5'>Add Type</Link>
            <Row className="justify-content-md-center mx-5">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {types.map((type, index)=> (
                            <tr key={type._id}>
                            <td>{index + 1}</td>
                            <td>{type.name}</td>
                            <td>
                            <Link to={`edit/${type._id}`} class="btn btn-primary mx-2" >Edit</Link>
                            <Button onClick={()=> deleteType(type._id)} variant="danger">Delete</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default TypeList;
