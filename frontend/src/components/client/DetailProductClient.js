import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderClient from './HeaderClient';

function DetailProductClient() {
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
      const res = await axios.get(`http://localhost:5000/product/${id}`);
      setProduct(res.data);
  }

  return (
    <>
      <HeaderClient />
      <div class="container">

        <div class="row my-5">
          <div class="col-4 foto-product">
            <img src={`http://localhost:5000/${product.image}`} class="img-thumbnail" alt="gambar-product" />
          </div>
          <div class="col-8">
            <div class="jumbotron">
              <h1 class="fs-3 fw-bold text-light">{product.name}</h1>
              <p class="fs-4 fw-semibold">{product.price}</p>
              <p class="fs-6 txt">{product.description}</p>

              <div class="row">
                <div class="col">
                  <p class="fs txt">{product.category}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fs-6 txt">Qty: {product.stock}</p>
                </div>
              </div>
              <a type="submit" class="btn btn-success">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProductClient