import React from "react";
import Instagram from "../../Assets/ig.png";
import Twitter from "../../Assets/twt.png";

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
                <div>
                    <img className="icon" src={Instagram} alt="ig" />
                    <img className="icon" src={Twitter} alt="twt" />
                </div>
                <div className="section-2">Mail: </div>
            </div>
        </div>
        <div className="creator">Created by Sabnam Begum Hazari</div>
        <div className="end-box"></div>
    </div>)
}

export default Footer;