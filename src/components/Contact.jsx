import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [messageBox, setMessageBox] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setSubject("");
    setEmail("");
    setMessageBox("");
    emailjs
      .sendForm(
        "service_geka3na",
        "template_mdg27i6",
        formRef.current,
        "8lj4HY89GrL6Y3zvN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact fade-in">
      <div data-aos="fade-in" className="contactdiv">
        <h1 className="contacttitle">Contact Me</h1>
        <div className="contactinfo">
          <div className="inputStuff">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="user_name"
              ></input>
              <input
                type="text"
                placeholder="Subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
                name="user_subject"
              ></input>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                name="user_email"
              ></input>
              <textarea
                row="5"
                placeholder="Message"
                onChange={(e) => {
                  setMessageBox(e.target.value);
                }}
                value={messageBox}
                name="message"
              />
              <button className="submitButton">Submit</button>
              {done && "Thank you!"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
