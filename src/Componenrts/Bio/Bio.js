import React from "react";
import "./Bio.css";

const  Bio = () =>{
return(
<div className="Bio">
  <div className="Bio-containtent">
    <h1>
      Hello, I'm <br></br>Theli Sanjay
    </h1>
    <p className="boi-phara1">READY TO BUILD!</p>
    <p className="boi-phara2">
      1 Year Experience in Federal Soft Systems. Transitioning into a software
      developer role with one year of experience. Proficient in CSS, Bootstrap,
      JavaScript, React, and API integrations. Passionate about building
      user-friendly interfaces. Let's code the future together!
    </p>
  </div>
  <div className="bio-image">
    <img
      className="bio-image-pic"
      src="./images/MicrosoftTeams-image (9) (1) (1).png"
    ></img>
  </div>
</div>
    )
}
export default Bio ;