import React from "react";
import { useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";
import Modal from "../Molecules/Order_Modal";

const Cart=()=>
{
    const [showModal,setShowModal]= useState(false)
    const navigate= useNavigate();
    useEffect(()=>
    {
        let details= localStorage.getItem('user');
        if(!details)
        {
            navigate("/");
        }
    },[])

    return(<div>
        {
            showModal ?<Modal onclose={()=>{setShowModal(false)}}/> : null
        }
        <Navbar/>
            <div className="cart-bg">
                <div className="cart-header">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                <div className="cart-item">
                    <div>Printed top</div>
                    <div>Rs.650.00</div>
                    <div>2</div>
                    <div>Rs.1300.00</div>
                </div>
                <div className="cart-button-box" >
                    <button className="cart-button">Update Cart</button>
                    <button className="cart-button" onClick={()=>(navigate('/landing'))}>Return to Shop</button>
                </div>
                <div className="cart-check">
                    <div className="cart-total">Cart Total</div>
                    <table >
                        <tr>
                            <td>Subtotal</td>
                            <td>89932 Rs</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>89932 Rs</td>
                        </tr>
                    </table>
                    <button className="checkout" onClick={()=>{setShowModal(true)}}>Proceed to Order</button>
                </div>
            </div>
            
        <Footer/>
    </div>)
}

export default Cart;