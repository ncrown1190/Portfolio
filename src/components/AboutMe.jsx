import "./AboutMe.css";
//import jsImage from "../img/javascript.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div className="AboutMe fade-in">
      <h1 data-aos="fade-down">About Me</h1>
      <p data-aos="fade-in" className="aboutMe">
        I am a self-motivated and passionate returning to work as Web Developer.
        In order to fulfill my passion and to hone my skills, I joined Grand
        Circus Bootcamp on Full Stack JavaScript development. The projects I
        have done in the boot camp have given me a good practice in application
        of the knowledge and skills to practical and real life scenarios. With
        my skills in software development and my past experience in team work,
        communication and leadership, I am confident that I will be able to
        handle real life business case scenarios in Front End development. The
        tools I have used include among others JavaScript, Node JS, React HTML
        CSS, Source Code Management using Git/GitHub, Test Driven Development.
      </p>
    </div>
  );
}
