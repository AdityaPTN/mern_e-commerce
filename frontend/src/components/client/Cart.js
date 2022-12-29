import React, {useState, useEffect} from 'react'
import HeaderClient from './HeaderClient'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const [code, setCode] = useState("");
    const [product_list, setProduct] = useState("");
    const [status] = useState("Approve Order");
    const [isCheckOut, setCheckOut] = useState(false);
    const navigate = useNavigate();
    
    useEffect(()=> {
        getCart();
        generateString();
    },[]);

    const getCart = async () => {
        const res = await axios.get('http://localhost:5000/cart');
        setCart(res.data);
        countTotal(res.data)
        productList();
        console.log(cart);
    }

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            getCart();
        } catch (err) {
            console.log(err);
        }
    }

    const deleteAllItem = async() => {
        try{
            await axios.delete(`http://localhost:5000/cart`);
            getCart();
            setTotal(0);
        }catch(err){
            console.log(err);
        }
    }

    const increaseQuantity = (id, qty) => {
        console.log(quantity)
        setQuantity(qty + 1)
        try {
             axios.patch(`http://localhost:5000/cart/${id}`,{
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

    const countTotal = async() => {
        let result = 0;
        for(var i=0;i<cart.length;i++){
            result += result + (cart[i].price * cart[i].quantity)
        }
        setTotal(result)
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

    const productList = async() => {
        let result = '';
        for(var i=0;i<cart.length;i++){
            result += result + cart[i].product_name + " : " + cart[i].quantity + "_"
        }
        setProduct(result)
    }

    const checkOut = async(e) => {
        setCheckOut(true);
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
        deleteAllItem();
        setTotal(0);
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
                                    <small><span>Rp. {cart.price}</span></small>
                                    <br/>
                                    <button onClick={() => deleteItem(cart._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <button onClick={(e) => decreaseQuantity(cart._id, cart.quantity)} className="btn btn-sm">-</button>
                                {cart.quantity}
                                <button onClick={(e) => increaseQuantity(cart._id, cart.quantity)} className="btn btn-sm">+</button>
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
                <button className='btn btn-success' onClick={checkOut}>Check Out</button>
            <div className='my-4'>
                {isCheckOut? <Code code={code}/> : null}
            </div>
            </div>
        </>
    );
}

const Code = ({ code }) => {
    return <h1 className='justify-content-md-center'>Your Code: {code}</h1>;
};

export default Cart;
