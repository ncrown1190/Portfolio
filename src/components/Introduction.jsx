import "./Introduction.css";
//import Smiley from "../img/smiley.png";
import githublogo from "../img/github-icon-1.png";
// import githublogo from "../img/githublogo.svg";
import linkedinlogo from "../img/linkedinlogo.png";

export default function Introduction() {
  return (
    <div className="intro">
      <div className="left">
        <div className="leftcontent">
          <h2 className="introname">Hi, I'm</h2>
          <h1 className="name">Nazima Taj</h1>
          <h4>Full-Stack Developer</h4>
          <div className="imgWrap">
            <a
              href="https://github.com/ncrown1190"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githublogo} alt="github logo"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/nazima-taj/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinlogo} alt="linkedin logo"></img>
            </a>
          </div>
          <i className="bouncingArrow fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}
