import React from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../../Assets/user.png";
import SearchIcon from "../../Assets/search.png";
import { useState } from "react";

const Navbar=()=>
{
    const[search, setSearch]=useState('');
    const navigate= useNavigate(); 

    const handleSearch=()=>
    {
        navigate(`/products?search=${search}`);
    }


    return(<div >
        <div className="navbar">
        <div className="logo">CART-Z</div>
        <div className="search-box">
                <input type="text" className="search-input"
                 placeholder="Find Your Desirable Trends" 
                    value={search} 
                    onChange={(event)=>(setSearch(event.target.value))} />
                <img src={SearchIcon} alt="search-icon" className="search-icon" 
                onClick={()=>handleSearch()} />
            </div>
            <div className="buttons" onClick={()=>navigate('/landing')}>Home</div>
            <div className="buttons" onClick={()=>navigate('/products')}>Product</div>
            <div className="buttons" onClick={()=>navigate('/products')}>Your Orders</div>
            <div className="buttons" onClick={()=>navigate('/cart')}>Cart</div>
            <div className="buttons"> 
             <div className="buttons" >
                <div class="dropdown">
                <img className="user-icon" src={UserIcon} alt="profile" />
                    <button class="dropbtn"> {localStorage.getItem('user')}</ button>
                     <div class="dropdown-content">
                         <a href="/products">Credits</a>
                         <a href="/products">Details</a>
                         <a href="/">Logout</a>
                    </div>
                 </div>
            </div>
            </div>
        </div>
    </div>)
}


export default Navbar;