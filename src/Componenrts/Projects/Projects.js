import React from "react";
 import "./Projects.css"


 const Projects =()=> {
    return (
      <>
        <div id="projects">
          <div className="Projects-titel">
            <h2>Projects</h2>
            <span className=" underline"></span>
          </div>
          <div className=" switches">
            <button>All</button>
            <button>WebSites</button>
            <button>Articals</button>
          </div>
          <div className="projects-container">
            <div className="project1">
              <h2 className="titlename1">OneHour Developer</h2>
              <p>
                Ui Part Design with React and Fixing Bugs Ui Part Design with
                React and Fixing Bugs Ui Part Design with React and Fixing Bugs
              </p>
              <div className="viewbtncontainer">
                <a className="viewbtn" href="#">
                  View Projects
                </a>
                <a className="viewbtn" href="#">
                  View Projects
                </a>
              </div>
            </div>
            <div className="project1-img">
              <img src="./images/Project1.png"></img>
            </div>
          </div>
        </div>
      </>
    );
 }
 export default Projects ;
