import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Form, Button, Table } from 'react-bootstrap'
import HeaderClient from './HeaderClient'

const CheckOrder = () => {
  const [query, setQuery] = useState('')
  const [orders, setOrder] = useState([])

  const getOrders = async () => {
    const res = await axios.get('http://localhost:5000/order');
    setOrder(res.data)
  }

  useEffect(() => {
    getOrders();
  }, []);

  console.log(query);
  return (
    <>
      <HeaderClient />
      <Container>
        <Form className="d-flex ms-auto me-auto mt-3" style={{ width: '500px' }}>
          <Form.Control
            type="text"
            placeholder="Cari Kode..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="light">Cari</Button>
        </Form>

        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>Code</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.code}</td>
                <td>{order.product_list}</td>
                <td>
                  {order.status === "Approve Order" ? (<p>On Process</p>)
                    : order.status}
                </td>
                <td>Rp. {order.total}</td>
                <td>{order.created}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  )
}

export default CheckOrder