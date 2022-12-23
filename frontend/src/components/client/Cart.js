import React, {useState, useEffect} from 'react'
import HeaderClient from './HeaderClient'
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    
    useEffect(()=> {
        getCart();
    },[]);

    const getCart = async () => {
        const res = await axios.get('http://localhost:5000/cart');
        setCart(res.data);
        console.log(res.data)
    }

    const deleteItem = async (id) => {
        try {
            axios.delete(`http://localhost:5000/cart/${id}`);
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const increaseQuantity = async (id,qty) => {
        setQuantity(qty)
        setQuantity( qty + 1 )
        try {
            await axios.patch(`http://localhost:5000/cart/${id}`,{
                quantity
            });
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const decreaseQuantity = async (id, qty) => {
        setQuantity(qty)
        setQuantity( qty - 1 )
        try {
            await axios.patch(`http://localhost:5000/cart/${id}`,{
                quantity
            });
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const countTotal = async (price, quantity) => {
        setTotal(total + (price * quantity))
    }


    return (
        <>
            <HeaderClient />
            <div className="container mt-2 my-3 py-5">
                <div className="container mt-2">
                    <h4>Your Cart</h4>
                </div>
                <table className='pt-5 table'>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    {cart.map((cart, qty)=>(
                        <tr key={cart._id}>
                            <td>
                                <div>
                                    <p><img src={`http://localhost:5000/${cart.image}`} alt="#" width="50" />
                                    {cart.product_name}
                                    <small><span>Rp. </span>{cart.price}</small>
                                    <br/>
                                    <button onClick={() => deleteItem(cart._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </p>
                                </div>
                            </td>
                            <td>
                                
                                
                                <button onClick={(e) => decreaseQuantity(cart._id, qty)}>-</button>
                                {qty = cart.quantity}
                                <button onClick={(e) => increaseQuantity(cart._id, qty)}>+</button>
                            </td>
                            <td>
                                <span>Rp. {cart.price * cart.quantity}</span>
                                
                            </td>
                        </tr>
                    ))}
                </table>
                <div class="cart-total">
                    <table>
                        <tr>
                            <td>Total</td>
                            Rp. {total}
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Cart;
