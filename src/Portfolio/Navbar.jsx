import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ClickAudio } from "./ClickAudio";

const Navbar = () => {
  let [actice, setActive] = useState("Home");

  return (
    <div id="nav-menu">
      <a
        href="#home"
        onClick={() => {
          setActive("Home");
          ClickAudio();
        }}
        className={actice === "Home" ? "active" : ""}
      >
        <AiOutlineHome className="Icon nav-link.home" />
      </a>

      <a
        href="#about"
        onClick={() => {
          setActive("About");
          ClickAudio();
        }}
        className={actice === "About" ? "active" : ""}
      >
        <AiOutlineUser className="Icon nav-link.about" />
      </a>

      <a
        href="#skills"
        onClick={() => {
          setActive("Skills");
          ClickAudio();
        }}
        className={actice === "Skills" ? "active" : ""}
      >
        <FaLaptopCode className="Icon nav-link.skills" />
      </a>

      <a
        href="#projects"
        onClick={() => {
          setActive("Projects");
          ClickAudio();
        }}
        className={actice === "Projects" ? "active" : ""}
      >
        <FaHeartPulse className="Icon nav-link.projects" />
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActive("Contact");
          ClickAudio();
        }}
        className={actice === "Contact" ? "active" : ""}
      >
        <MdEmail className="Icon nav-link.contact" />
      </a>
    </div>
  );
};

export default Navbar;
