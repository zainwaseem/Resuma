import React from "react";
import Picture from "../../img/zain.jpg";
import "./HomeComponent.css";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";

const HomeComponent = () => {
  return (
    <div className="home-wrapper">
      <div className="home-inner">
        <img src={Picture} alt="" />
        <h1>Zain Waseem</h1>
        <h3>Full Stack Websites Developer</h3>
        <p>
          I am Software Engineer with a passion of Web, Looking to leverage my
          knowledge and experience as Website Developer. I am good at various
          front and back-end technologies like React JS, Bootstrap 5.x,Rest
          APIs, APIs Integration. Excellent command in english spoken
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/ZainWaseemm"
              rel="noopener noreferrer"
            >
              <Icon size={24} icon={facebookSquare} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/zainwaseemm"
              rel="noopener noreferrer"
            >
              <Icon size={24} icon={twitterSquare} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zain-waseem-0532151a4/"
              rel="noopener noreferrer"
            >
              <Icon size={24} icon={linkedinSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zainwaseem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} icon={githubSquare} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCfGaxl11Mv_xWOP4Sish1Nw"
              rel="noopener noreferrer"
            >
              <Icon size={24} icon={youtubePlay} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
