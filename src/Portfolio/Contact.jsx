import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCloseCircle,
  AiFillHeart,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { VscPass } from "react-icons/vsc";

const Contact = () => {
  let [show, setShow] = useState({ signal: false, message: "" });

  useEffect(() => {
    AOS.init();
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    setShow((prev) => {
      return { ...prev, signal: true, message: "Your message has been sent" };
    });
    setTimeout(() => {
      setShow((prev) => {
        return { ...prev, signal: false, message: "" };
      });
      e.target.reset();
    }, 3000);
  };
  return (
    <div id="contact">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="headers"
      >
        <header>Get In Touch </header>
        <p>Contact Me</p>
      </div>

      <div
        id="Contact-Details"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div id="details-section">
          <p className="Contact-title">Just Say Hi</p>
          <p className="fewdt">
            I am receptive to discussing full-time opportunities. Feel at ease
            to contact me using your preferred medium.
          </p>
          <p className="withIcon">
            <span>
              <FaLocationDot className="withIconspan" />
            </span>
            Kolkata, India
          </p>
          <p className="withIcon">
            <span>
              <BsFillTelephoneFill className="withIconspan" />
            </span>
            +91 8695453740
          </p>
          <p className="withIcon">
            <span>
              <MdEmail className="withIconspan" />
            </span>
            connect2skalijan@gmail.com
          </p>
          <div className="allIcons contactwalaIcon">
            <a href="https://www.linkedin.com/in/alijan786/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/SK-ALIJAN">
              <AiFillGithub />
            </a>
            <a href="mailto:connect2skalijan@gmail.com">
              <HiMail />
            </a>
          </div>
        </div>

        <div id="form-section">
          <p className="Contact-title">Reach out to connect</p>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email*" required />
            <textarea
              placeholder="Your Message"
              className="your-message"
              required
            />
            <input type="submit" value="Send Message" id="submit" />
          </form>
        </div>
      </div>
      {show.signal ? (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          id="MessageSent"
        >
          <VscPass />
          <p>{show.message}</p>
          <AiFillCloseCircle
            onClick={() => {
              setShow((prev) => {
                return { ...prev, signal: false, message: "" };
              });
            }}
          />
        </div>
      ) : (
        ""
      )}

      <p id="Footer">
        Designed and Developed by
        <span style={{ color: "teal", margin: "5px" }}>Sk Alijan </span>| ©
        Copyright 2023 . All rights reserved
      </p>

      
    </div>
  );
};

export default Contact;
