import React from "react";
import "./AboutComponent.css";
import stics from "../../img/stics.jpg";
import nwf from "../../img/nwf.png";
import fs from "../../img/full-stack.png";

import nya from "../../img/nya.png";

const AboutComponent = () => {
  return (
    <div className="about-wrapper">
      <div className="container">
        <h1>About Me</h1>
        <p>
          I'm a Student of Software Engineering currently in the 7th semester.
          My objective is to get a job as a website developer. Looking to
          leverage my knowledge and experience into a role of Website Developer.
        </p>
        <div className="about-designations">
          <div className="designation">
            <img src={stics} alt="" />
            <h3>Graduation</h3>
            <p>Bachelor's of Software Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
