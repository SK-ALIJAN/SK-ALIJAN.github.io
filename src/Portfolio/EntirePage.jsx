import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import GithubStat from "./GithubStat";

const EntirePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <GithubStat />
      <Contact />
    </>
  );
};

export default EntirePage;
