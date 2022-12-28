import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import HeaderClient from './HeaderClient';
import { useNavigate} from 'react-router-dom';

function DetailProductClient() {
  const [product, setProduct] = useState([]);
  const [product_name, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
      const res = await axios.get(`http://localhost:5000/product/${id}`);
      console.log(res.data)
      setProduct(res.data);
      setProductName(res.data.name);
      setPrice(res.data.price);
      setImage(res.data.image);
  }

  const addToCart = async(e) => {
    e.preventDefault();
    console.log(quantity);
    try{
      await axios.post('http://localhost:5000/cart',{
        product_name,
        price,
        quantity,
        image
      });
      navigate('/cart')
    }catch(err){
      console.log(err)
    }
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
              <h1 class="fs-3 fw-bold text-dark">{product.name}</h1>
              <p class="fs-4 fw-semibold">Rp. {new Intl.NumberFormat().format(product.price)}</p>
              <h6 class="text-muted">Deskripsi Produk :</h6>
              <p class="fs-6 txt">{product.description}</p>

              <div class="row">
                <div class="col">
                  <h6 className='text-muted'>Kategori :</h6>
                  <p class="fs txt">{product.category}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                <h6 className='text-muted'>Stock :</h6>
                  <p class="fs-6 txt">{product.stock}</p>
                </div>
              </div>
              <form onSubmit={addToCart}>
                <input type="hidden" value={product_name}/>
                <input type="hidden" value={price}/>
                <input type="hidden" value={image}/>
                <input type="hidden" value={quantity}/>
                <input type="submit" className='btn btn-primary' value="Add to Cart"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProductClient