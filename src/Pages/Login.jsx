import React from "react";
import Background from "../Molecules/Backgorund/Background";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>
{

    const[username, setUsername]=useState();
    const[password, setPassword]=useState();
    const[message, setMessage]=useState("");
    const Navigate = useNavigate();

    useEffect(()=>
    {
        const savedValue = localStorage.getItem("user");
        setUsername(savedValue);
    },[])

    const handleLogin=()=>
    {
            if(!username && !password)
                {
                    setMessage("Enter The Credentials");
                }
            else
                {
                    setMessage("");
                    localStorage.setItem("user", username);
                    Navigate("/landing");
                    
                }
    }


    return(<Background variant={'login'}>
            <div className="cart-z">CART-Z</div>
            <div className="login-area">
                <div className="welcome">Welcome back!</div>
                <div className="welcome-intro">Enter your Credentials to access your account</div>
                <div className="login-form">
                     <input className="input" type="text"  name="username" placeholder="Enter Your Username" onChange={(event)=>{setUsername(event.target.value)}} />
                     <input className="input" type="password" placeholder="Enter Your Password" onChange={(event)=>{setPassword(event.target.value)}} />
                     <div className="remember-me">
                        <input type="checkbox" /> Remember Me
                        <button className="forgot-pass">Forgot Password</button>
                     </div>
                     <button className="login-button" onClick={handleLogin}>Log in</button>
                     <div className="note">
                        <div className="login-note">Don’t have an account?</div>
                         <div className="signup-color">Sign up</div>
                    </div>
                     <div className="message">{message}</div>
                </div>
            </div>
    </Background>)
}

export default Login; 