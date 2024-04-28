import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";

const Products=()=>
{
    const navigate=useNavigate();
    useEffect(()=>
    {
        let details= localStorage.getItem('user');
        if(!details)
        {
            navigate("/");
        }
    },[])

    return(<div>
        <Navbar/>
        products
        <Footer/>
    </div>)
}

export default Products;