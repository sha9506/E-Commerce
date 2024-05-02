import React from "react";
import Footer from "../Molecules/Footer/Footer";
import Navbar from "../Molecules/Navbar/Navbar";
import SaleIcon from "../Assets/sale.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing=()=>
{
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
        <Navbar/>
        <div className="landing"></div>
        <div className="featured">Our Featured Collections</div>
        <div className="featured-collection">
            <div className="side-feature">
                <div className="knitwear">COLORFUL KNITWEAR SERIES</div>
                <div className="pants">TOP PANTS SERIES</div>
            </div>
            <div className="middle-feature">BARNEY MADE SPECIAL SERIES</div>
            <div className="side-feature">
                <div className="top">FRESHIDER TOP SERIES</div>
                <div className="sweater"> SWEATER SHOW SERIES</div>
            </div>
        </div>
        <div className="sale-content">
            <img src={SaleIcon} alt="sale" className="sale-icon"/>
            <div className="sale-box">
                <div className="sale-percent">Get 50% Off</div>
                <div className="sale-info">for all new product purchases min. purchase RS. 5000.00</div>
                <button className="shop-button">SHOP NOW</button>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default Landing;