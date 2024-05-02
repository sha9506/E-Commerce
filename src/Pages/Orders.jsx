import React from "react";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";

const Orders=()=>
{
    return(<div>
        <Navbar/>
            <div className="order-page">
                 <div className="order-done">ORDER CONFIRMED!!</div>
            </div> 
        <Footer/>
    </div>
    )
}

export default Orders;