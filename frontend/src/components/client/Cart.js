import React, {useState, useEffect} from 'react'
import HeaderClient from './HeaderClient'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const [code, setCode] = useState("");
    const [product_list, setProduct] = useState("asdasdas");
    const [status] = useState("Approve Order");
    const navigate = useNavigate();
    
    useEffect(()=> {
        getCart();
        generateString();
    },[]);

    const getCart = async () => {
        const res = await axios.get('http://localhost:5000/cart');
        setCart(res.data);
        countTotal();
    }

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const increaseQuantity = async (id, qty) => {
        console.log(quantity)
        setQuantity(qty + 1)
        console.log(`qty = ${qty}`)
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
        setQuantity(qty - 1)
        try {
            await axios.patch(`http://localhost:5000/cart/${id}`,{
                quantity
            });
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const countTotal = () => {
        console.log(cart);
        setTotal(0);
        for(var i=0;i<cart.length;i++){
            setTotal(total + (cart[i].price * cart[i].quantity))
        }

    }

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const generateString = () => {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setCode(result)
    }

    const checkOut = async(e) => {
        e.preventDefault();
        console.log(code);
        try{
            await axios.post('http://localhost:5000/order',{
                product_list,
                total,
                code,
                status
        });
            
        }catch(err){
            console.log(err)
        }
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

                    {cart.map((cart, index)=>(
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
                                <button onClick={(e) => decreaseQuantity(cart._id, cart.quantity)}>-</button>
                                {cart.quantity}
                                <button onClick={(e) => increaseQuantity(cart._id, cart.quantity)}>+</button>
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
                            <td>Rp. {total}</td>
                        </tr>
                    </table>
                </div>
                <form onSubmit={checkOut}>
                    <input type="hidden" value={product_list}/>
                    <input type="hidden" value={total}/>
                    <input type="hidden" value={code}/>
                    <input type="hidden" value={status}/>
                    <input type="submit" className='btn btn-success' value="Check Out"/>
                </form>
            </div>
        </>
    );
}

export default Cart;
