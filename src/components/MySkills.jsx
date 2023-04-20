import "./MySkills.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MySkills() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="MySkills fade-in">
      <h1 data-aos="fade-in">My Skills</h1>
      <div data-aos="fade-left" className="wrap">
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript logo"
          />
          <p>JavaScript</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="javascript logo"
          />
          <p>TypeScript</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="javascript logo"
          />
          <p>CSS</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="javascript logo"
          />
          <p>HTML</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="javascript logo"
          />
          <p>Node.js</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="javascript logo"
          />
          <p>React</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="javascript logo"
          />
          <p>MongoDB</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="javascript logo"
          />
          <p>PostGresql</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="csharp logo"
          />
          <p>C#</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            alt="Angular logo"
          />
          <p>AngularJS</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
            alt="dotNet logo"
          />
          <p>ASP .Net</p>
        </div>
        <div className="eachSkill">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Angular logo"
          />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
