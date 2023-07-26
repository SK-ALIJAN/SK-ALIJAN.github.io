import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  let [actice, setActive] = useState("Home");

  return (
    <div id="Navbar">
      <a
        href="#Home"
        onClick={() => {
          setActive("Home");
        }}
        className={actice === "Home" ? "active" : ""}
      >
        <AiOutlineHome className="Icon" />
      </a>

      <a
        href="#About"
        onClick={() => {
          setActive("About");
        }}
        className={actice === "About" ? "active" : ""}
      >
        <AiOutlineUser className="Icon" />
      </a>

      <a
        href="#Skills"
        onClick={() => {
          setActive("Skills");
        }}
        className={actice === "Skills" ? "active" : ""}
      >
        <FaLaptopCode className="Icon" />
      </a>

      <a
        href="#Projects"
        onClick={() => {
          setActive("Projects");
        }}
        className={actice === "Projects" ? "active" : ""}
      >
        <FaHeartPulse className="Icon" />
      </a>

      <a
        href="#Contact"
        onClick={() => {
          setActive("Contact");
        }}
        className={actice === "Contact" ? "active" : ""}
      >
        <MdEmail className="Icon" />
      </a>
    </div>
  );
};

export default Navbar;
