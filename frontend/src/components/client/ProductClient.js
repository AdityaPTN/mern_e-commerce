import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import HeaderClient from './HeaderClient'

function ProductClient() {
  
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('http://localhost:5000/product');
    setProduct(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const formatNumbering = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }

  // style={{ width: '18rem' }}
  return (
    <>
      <HeaderClient />
      <div className="container mt-3 card-wrapper">
        {products.map((product) => (
          <Container key={product._id}>
            <div class="card cardku" style={{ width: "18rem" }}>
              <a href="/detail">
                <img src={`http://localhost:5000/${product.image}`} class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <a class="card-title" href="/detail"><h5>{product.name}</h5></a>
                <h6 class="card-subtitle mb-2 text-muted">Rp. {formatNumbering(product.price)}</h6>
                <div className="text-center">
                  <a href="/detail" class="btn btn-primary">Detail</a>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </div>
    </>
  )
}

export default ProductClient