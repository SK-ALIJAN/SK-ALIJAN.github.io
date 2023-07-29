import React, { useEffect } from "react";
import img from "./about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import PDF from "./Sk_Alijan_Resume.pdf";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about">
      <div
        className="headers"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <header>Get To Know </header>
        <p>About Me</p>
      </div>

      <div id="myDetails">
        <img
          src={img}
          alt="alijan"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        />

        <div data-aos="fade-up" data-aos-duration="1500" className="about">
          <p className="aboutText section">
            Hi there! I'm Sk Alijan, and I love making stuff that exists on the
            internet. I'm a devoted coder with expertise in the MERN stack and
            excellent organizational & communication abilities, a keen eye for
            details, and the skill to write effective code. Moreover, I'm
            adaptable and quick to learn, making it easy for me to take on new
            challenges and embrace different technologies. As a newcomer to this
            professional field, I am filled with enthusiasm and eager to make a
            positive impact.
          </p>
          <p className="aboutText">
            I possess a clear, rational mindset with a hands-on approach to
            solving problems and a determination to finish tasks. Additionally,
            I thrive in collaborative environments and enjoy brainstorming
            creative solutions with my team.
          </p>

          <div className="ContactMe aboutText">
            <p>
              <AiFillPhone className="ContactIcon" /> Phone
            </p>
            <p id="contact-phone">+91 8695453740</p>
          </div>

          <div className="ContactMe distance aboutText">
            <p>
              <AiOutlineMail className="ContactIcon" /> Email
            </p>
            <p id="contact-email">connect2skalijan@gmail.com</p>
          </div>
          <div className="aboutText">
            <a
              href={PDF}
              download
              className="resumes"
              onClick={() => {
                window.location.href =
                  "https://drive.google.com/file/d/19h3vZHBl1SI3pwTEGEoVP1VADG1hr8kH/view?usp=sharing";
              }}
              id="resume-button-2"
            >
              My Resume
            </a>
            <a
              href="#Contact"
              className="resumes"
              style={{ marginLeft: "10px" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
