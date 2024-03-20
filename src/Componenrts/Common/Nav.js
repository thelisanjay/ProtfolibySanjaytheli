// import React from "react";
// import name from "./name.png";
import "./Nav.css";
import React,{useState} from "react";
// import {} from React
// import { FaBeer} from "react-icons/fa";
// import { useState } from "react";

const  Nav =()=>{
 const [activeLink, setActiveLink]= useState ("");
 const handleclickLink = (link) => {
  setActiveLink (link);
 };


    return (
      <nav className="nav-container">
        <div className="main-logo">
          <a href="">Theli Sanjay</a>
        </div>
        <div className="manulinks">
          <ul>
            <li>
              <a
                href=""
                onClick={() => handleclickLink("Bio")}
                className={`${activeLink === "Bio" ? "activeLink" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#skill" onClick={() => handleclickLink("skill")}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleclickLink("projects")}
                className={`${activeLink === "projects" ? "activeLink" : ""}`}
              >
                Projects
              </a>
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