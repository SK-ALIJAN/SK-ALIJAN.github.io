import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./pic.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="Home"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div id="first-child">
        <p className="hello">Hello, my name is </p>
        <p id="Name">Sk Alijan</p>
        <div className="typeAnimation">
          <div class="wrapper">
            <div class="static-txt">I'm a</div>
            <ul class="dynamic-txts">
              <li>
                <span>Full Stack Web Developer.</span>
              </li>
              <li>
                <span>Frontend Developer.</span>
              </li>

              <li>
                <span>Problem Solver.</span>
              </li>
              <li>
                <span>React Lover. </span>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/14sqbXO7CcpQK1m_38A3mLCWg3DcAxNyB/view?usp=drive_link"
          className="resumes"
        >
          See My Resume
        </a>
        <div className="allIcons">
          <a href="https://www.linkedin.com/in/alijan786/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/SK-ALIJAN">
            <AiFillGithub />
          </a>
          <a href="mailto:connect2skalijan@gmail.com.com">
            <HiMail />
          </a>
          <a href="https://api.whatsapp.com/send?phone=918695453740">
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
      <div id="mypic" data-aos="zoom-in">
        <img src={img} alt="My pic" />
      </div>
    </div>
  );
};

export default Home;
