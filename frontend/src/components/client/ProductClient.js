import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderClient from './HeaderClient';

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
              <Link to={`/product/${product._id}`} class="btn btn-light">
                <img src={`http://localhost:5000/${product.image}`} class="card-img-top" alt="..." />
              </Link>
              <div class="card-body">
                <Link to={`/product/${product._id}`} class="card-title"><h5>{product.name}</h5></Link>
                <h6 class="card-subtitle mb-2 text-muted">Rp. {formatNumbering(product.price)}</h6>
                <div className="text-center">
                  <Link to={`/product/${product._id}`} class="btn btn-primary">Detail</Link>
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