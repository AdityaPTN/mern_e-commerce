import React from 'react'
import HeaderClient from './HeaderClient'

function DetailProductClient() {
  return (
    <>
      <HeaderClient />
      <div class="container">

        <div class="row my-5">
          <div class="col-4 foto-product">
            <img src="/<%= product.image %>" class="img-thumbnail" alt="gambar-product" />
          </div>
          <div class="col-8">
            <div class="jumbotron">
              <h1 class="fs-3 fw-bold text-light">Product Name</h1>
              <p class="fs-4 fw-semibold">Rp. 200000000000</p>
              <p class="fs-6 txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quia.</p>

              <div class="row">
                <div class="col">
                  <p class="fs txt">Type</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fs-6 txt">Qty: Stock</p>
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