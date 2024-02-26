import React from "react";

import "./Contact.css"

const Contact =() => {
    return (
      <>
        <div className="Contact">
          <div className="Contact-titel">
            <h2>Contant</h2>
            <span className="Contact-Underline"></span>
          </div>

          <div className="Contact-inputfiled">
            <input placeholder=" Username"/>
            <input placeholder=" Email"/>
            <textarea placeholder="Enter message"/>
           <button className="Submitbtn">Submit</button>

          </div>
        </div>
      </>
    );
      
}
export default Contact ;