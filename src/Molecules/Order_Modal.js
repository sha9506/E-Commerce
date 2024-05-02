import React from "react";
import { useNavigate } from "react-router-dom";

let Modal= ({onclose}) =>
{
    const navigate=useNavigate();
    return (<div className="modal-main">
    <div className="modal-item">
      <div className="card-entry">
        <div className="card-name-item">
          <div className="card-name"> Enter the Card Details</div>
          <input className="card-name-entry" placeholder="Enter the Name on the card"/>
        </div>
        <div className="card-date-item">
          <div className="card-date">Expiry Date</div>
          <input className="card-date-entry" placeholder="Enter the time of Expiry"/>    
        </div>
        <div className="card-date-item">
          <div className="card-date">Expiry CVV</div>
          <input className="card-date-entry" placeholder="Enter the CVV"/>    
        </div>
        <div className="more-info">
          By clicking on pay button you can pay for your order. 
        </div>
      </div>
      <div className="modal-footer">
          <div className="card-cancel" onClick={()=>{onclose()}}>
            Cancel
          </div>
          <div className="card-pay" onClick={()=>navigate('/orders')}>Pay</div>
      </div>
    </div>
</div>)
}

export default Modal