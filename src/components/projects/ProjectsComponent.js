import React from "react";
import "./ProjectsComponent.css";
const ProjectsComponent = () => {
  return (
    <div className="projects-wrapper">
      <div className="container">
        <h1>Projects Details</h1>
        <div className="project-inner">
          <div className="pro">
            <h3>Blog Website</h3>
            <p>
              <i>August, 2022 - October, 2022</i>
            </p>
            <p>
              MERN Stack (MongoDB, Express, React, Node) <br />
              • User can Add delete and update their posts <br />
              • Every User have their on profile Where user can Update their
              profile also. <br />• Every user can see own & other users posts
            </p>
            <button>Read More</button>
          </div>{" "}
          <div className="pro">
            <h3>Food Website</h3>
            <p>
              <i>October, 2021 - December, 2021</i>
            </p>
            <p>
              html css <br />• Simple food Website
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
