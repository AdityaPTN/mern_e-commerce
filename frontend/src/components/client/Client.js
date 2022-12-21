import React from 'react'
import HeaderClient from './HeaderClient'
import { Link } from 'react-router-dom';

function Client() {
  return (
    <div>
      <HeaderClient />
      <div className="container text-center mt-3">
        <h1>Homepage</h1>
        <Link to="/product" class="btn btn-primary mt-3">Shop Now</Link>
      </div>
    </div>
  )
}

export default Client