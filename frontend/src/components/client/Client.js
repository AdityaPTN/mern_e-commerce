import React from 'react'
import HeaderClient from './HeaderClient'

function Client() {
  return (
    <div>
      <HeaderClient />
      <div className="container text-center mt-3">
        <h1>Homepage</h1>
        <a href="/product" className="btn btn-primary mt-3">Shop Now</a>
      </div>
    </div>
  )
}

export default Client