import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Table } from 'react-bootstrap';

const CategoryList = () => {
    const [categories, setCategory] = useState([]);

    useEffect(()=> {
        getCategories();
    },[]);

    const getCategories = async() => {
        const res = await axios.get('http://localhost:5000/category');
        setCategory(res.data);
    }

    const deleteCategory = async(id) =>{
        try{
            await axios.delete(`http://localhost:5000/category/${id}`);
            getCategories();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
            <Link to="add" className='button'>Add Category</Link>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index)=> (
                            <tr key={category._id}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>{category.type}</td>
                            <td>
                            <Link to={`edit/${category._id}`}>Edit</Link>
                            <Button onClick={()=> deleteCategory(category._id)} variant="danger">Delete</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default CategoryList;