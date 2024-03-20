import React from "react";
import "./Bio.css";

const  Bio = () =>{
return (
  <div id="Bio">
    <div className="Bio-Container">
      <h1>
        Hello, I’m <br />
        Theli Sanjay
      </h1>
      <h4 style={{}}>Ready to Build!</h4>
      <p className="phara-content">
        1 Year Experience in Federal Soft Systems. Transitioning into a software
        developer role with one year of experience. Proficient in CSS,
        Bootstrap, JavaScript
      </p>
      <div>
        <button className="linkdbtn">Linked in </button>
        <button className="gitbtn">Github </button>
      </div>
    </div>
    <div className="img-Container">
      
        <img
          className="imagepic"
          src="./images/MicrosoftTeams-image (9) (1) (1).png"
        />
  
    </div>
  </div>
);
}
export default Bio ;