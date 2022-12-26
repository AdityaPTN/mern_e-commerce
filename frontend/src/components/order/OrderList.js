import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {  Container, Row, Table } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';
import Header from '../Header.js';

const OrderList = () => {
    const [orders, setOrder] = useState([]);
    const [status, setStatus] = useState("On Packaging");

    useEffect(()=> {
        getOrders();
    },[]);

    const getOrders = async() => {
        const res = await axios.get('http://localhost:5000/order');
        setOrder(res.data);
    }

    const deleteOrder = async(id) =>{
        try{
            await axios.delete(`http://localhost:5000/order/${id}`);
            getOrders();
        }catch(err){
            console.log(err);
        }
    }

    const conditionalButton = (status, id) => {
        if(status === "Approve Order"){
            return <Button onClick={() => changeStatus(id, "On Packaging")} variant="danger">{status}</Button>
        }else if (status === "On Packaging"){
            return <Button onClick={() => changeStatus(id, "Ready")} variant="warning">{status}</Button>
        }else if (status === "Ready"){
            return <Button variant="success">{status}</Button>
        }
    }

    
    const changeStatus = async(id, status) => {
        setStatus(status)
        try{
            await axios.patch(`http://localhost:5000/order/${id}`, {
                status
            });
            getOrders();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <Header />
        <Container className="my-4">
            <Row className="justify-content-md-center mx-5">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr class="text-center">
                            <th>No</th>
                            <th>Product List</th>
                            <th>Total</th>
                            <th>Code</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index)=> (
                            <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.product_list}</td>
                            <td>Rp. {order.total}</td>
                            <td>{order.code}</td>
                            <td>
                            {conditionalButton(order.status, order._id)}
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

export default OrderList;
