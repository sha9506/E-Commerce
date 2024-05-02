import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";
import Modal from "../Molecules/Order_Modal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() =>
  {
    let details = localStorage.getItem("user");
    if (!details) {
      navigate("/");
    }
    if (localStorage.getItem("cart_list")) {
      setProductList(JSON.parse(localStorage.getItem("cart_list")));
      let a = 0;
      JSON.parse(localStorage.getItem("cart_list")).map((item) => {
        if (item.added_to_cart) {
          a = a + item.product_price;
        }
        setTotal(a);
      });
    }
  }, []);

  return (
    <div>
      {showModal ? (
        <Modal
          onclose={() => {
            setShowModal(false);
          }}
        />
      ) : null}
      <Navbar />
      <div className="cart-bg">
        <div className="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="cart-box">
          {productList
            ? productList.map((item) => {
                if (item.added_to_cart) {
                  return (
                    <div className="cart-item">
                      <div>{item.product_name}</div>
                      <div>Rs.{item.product_price}</div>
                      <div>1</div>
                      <div>Rs.{item.product_price}</div>
                    </div>
                  );
                }
              })
            : null}
        </div>

        <div className="cart-button-box">
          <button className="cart-button" onClick={()=>navigate('/products')}>Update Cart</button>
          <button className="cart-button" onClick={() => navigate("/landing")}>
            Return to Shop
          </button>
        </div>
        <div className="cart-check">
          <div className="cart-total">Cart Total</div>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>{total} Rs</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Total: </td>
              <td>{total} Rs</td>
            </tr>
          </table>
          <button
            className="checkout"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Proceed to Order
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;