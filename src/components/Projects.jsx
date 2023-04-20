import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import gnewslogo from "../img/gnews.png";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="Projects fade-in">
      <div data-aos="fade-in" className="projectWrap">
        <h1>Projects</h1>
        <div className="grid">
          <div>
            <div className="eachProject">
              <h2>Weather App</h2>
              <p>Using OpenWeather API.</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="sass logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="bootstrap logo"
              />
            </div>
            <a
              href="https://github.com/ncrown1190/WeatherAppReact/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
          <div>
            <div className="eachProject">
              <h2>Covid-19 vaccine </h2>

              <p>Location Finder Using cdc.gov API.</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="javascript logo"
              />
            </div>
            <a
              href="https://covid19-vac-finder.web.app/zipcode/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
          <div>
            <div className="eachProject">
              <h2>World News App </h2>

              <p>Top-Headlines for different Countries.</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
              <img src={gnewslogo} alt="gnews logo"></img>
            </div>
            <a
              href="ncrown1190.github.io/World-News-App/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
          <div>
            <div className="eachProject">
              <h2>Recipe Search</h2>
              <p>Using Spoonacular API.</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
            </div>
            <a
              href="https://ncrown1190.github.io/React-Project-Spoonacular-Api/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
          <div>
            <div className="eachProject">
              <h2>TeaSpoon-POS</h2>
              <p>JavaScript.</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
            </div>
            <a
              href="https://ncrown1190.github.io/TeaSpoon-PoS/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
          <div>
            <div className="eachProject">
              <h2>Memory Game</h2>
              <p>Using javaScript</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="javascript logo"
              />
            </div>
            <a
              href="https://ncrown1190.github.io/Memory-Game/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="projectsButton">View Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
