import React, { useEffect, useState } from "react";
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
          <p className="aboutText section" id="user-detail-intro">
            Hi there! I'm Sk Alijan, An enthusiastic Full Stack Developer with a
            passion for crafting innovative projects.I possess a diverse skill
            set encompassing a wide range of technologies and tools, enabling me
            to meticulously construct top-notch products.
          </p>
          <p className="aboutText">
            i am passionate about developing user-friendly web applications using
            MERN Stack. I enjoy developing websites and a keen interest in
            solving problems and coming up with effective solutions. Eager to be
            a part of a team which gives me ability to learn and grow. I possess
            a clear, rational mindset with a hands-on approach to solving
            problems and a determination to finish tasks.
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
              href="#contact"
              className="resumes resumesButton"
              style={{ marginLeft: "10px" }}
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
