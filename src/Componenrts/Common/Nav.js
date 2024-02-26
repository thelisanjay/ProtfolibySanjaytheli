// import React from "react";
// import name from "./name.png";
import "./Nav.css";
// import {} from React
// import { FaBeer} from "react-icons/fa";
// import { useState } from "react";

const  Nav =()=>{
    return (
      
        <nav className="nav-container">
          <div className="main-logo">
            <a href="#"> Theli Sanjay</a>
          </div>
          <div className="manulinks">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">FaceBook</a>
              </li>
            </ul>
          </div>
        </nav>

       
        
      
    );
}
export default Nav;