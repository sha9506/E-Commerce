import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";
import Product_list from "../DummyData/Product_list";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  useEffect(() => {
    let details = localStorage.getItem("user");
    if (!details) {
      navigate("/");
    }

    if (searchParam.get("search")) {
      const filterBySearch = Product_list.filter((item) =>
        item.product_name
          .toLowerCase()
          .includes(searchParam.get("search").toLowerCase())
      );
      setProductList(filterBySearch);
    } else {
      setProductList(Product_list);
    }
  }, []);

  const addToCart = (data) => {
    let a = [];
    data.added_to_cart = !data.added_to_cart;
    productList.map((item) => {
      if (data.product_name == item.product_name) {
        a[a.length] = data;
      } else {
        a[a.length] = item;
      }
    });
    setProductList(a);
    localStorage.setItem("cart_list", JSON.stringify(a));
  };

  return (
    <div>
      <Navbar />
      <div className="product-objects">
        {productList.length > 0 ? (
          productList.map((item) => {
            return (
              <div
                className="product-list"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <img
                  src={item.icon}
                  alt="product"
                  className="product-icon"
                ></img>
                <div
                  className="product-info"
                  style={item.added_to_cart ? { backgroundColor: "green" } : {}}
                >
                  {item.added_to_cart ? null : (
                    <div className="product-title">{item.product_name}</div>
                  )}
                  <div className="product-price">
                    {item.added_to_cart ? "Added" : `Rs. ${item.product_price}`}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>We Don't Have That In Our Collection.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;