import React from "react";
import Instagram from "../../Assets/ig.png";
import Twitter from "../../Assets/twt.png";
import Youtube from "../../Assets/yt.png";

const Footer=()=>
{
   
    return(<div>
        <div className="footer">
             <div>
                <div className="footer-logo">CART-Z</div>
                <div>From Z to Y</div>
             </div>
             <div>
                <div className="sections">Get Help</div>
                <div className="sections">FAQ</div>
                <div className="sections">Shipping</div>
                <div className="sections">Payment</div>
             </div>
             <div>
                <div className="section-2">Follow us</div>
                <div className="icon-item">
                    <img className="icon" src={Instagram} alt="ig" />
                    <img className="icon" src={Twitter} alt="twt" />
                    <img  className="icon" src={Youtube} alt="yt" />
                </div>
                <div className="section-2">Mail: sabnamhazari@gmail.com </div>
            </div>
        </div>
        <div className="end-box">
        <div className="creator">2024 CART-Z by Sabnam Begum Hazari</div>
        </div>
    </div>)
}

export default Footer;