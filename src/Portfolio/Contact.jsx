import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { ErrorAudio, SuccessAudio } from "./ClickAudio";

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init();
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6okbbp7",
        "template_jiugz6o",
        form.current,
        "RKjlsG2NuRKQfWoVX"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent!");
          SuccessAudio();
          e.target.reset();
        },
        (error) => {
          toast.warn("Something wrong! please use a different contact method");
          ErrorAudio();
          e.target.reset();
        }
      );
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
          <form onSubmit={handleSubmit} ref={form}>
            <input type="text" name="user_name" required placeholder="Name" />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email*"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="your-message"
              required
            />
            <input type="submit" value="Send Message" id="submit" />
          </form>
        </div>
      </div>

      <ToastContainer />

      <p id="Footer">
        Designed and Developed by
        <span style={{ color: "teal", margin: "5px" }}>Sk Alijan </span>| ©
        Copyright 2023 . All rights reserved
      </p>
    </div>
  );
};

export default Contact;
