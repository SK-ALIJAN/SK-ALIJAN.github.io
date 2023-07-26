import React, { useState } from "react";
import Logo from "./logo.jpg";
import Bajkul from "./bajkul.png";
import Id from "./Id.png";
import { GrClose } from "react-icons/gr";

const Education = () => {
  let [id, setId] = useState(false);

  return (
    <div id="education">
      <div
        className="headers"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <header>My</header>
        <p>Education</p>
        <div className="eductionDetails">
          <img src={Logo} alt="Masai Logo" />
          <div id="insideEductionDetails">
            <div className="education-details">
              <div>
                <h3>Masai School</h3>
                <p>Full Stack Web Development</p>
              </div>

              <p>October 2022-Present</p>
            </div>
            <div className="tech-stacks">
              <h4>Tech Stacks</h4>
              <p>
                <span>Frontend:</span> HTML, CSS, JavaScript, React JS, Chakra
                UI, TypeScript, Redux
              </p>
              <p>
                <span> Backend:</span> Node.js, MongoDB, Data Structures and
                Algorithms, Express, Next.js
              </p>
            </div>
            <div className="achievements">
              <h4>Achievements</h4>
              <ul>
                <li>1000+ hours of practical coding</li>
                <li>300+ hours of DSA</li>
                <li>100+ hours of skill development</li>
                <li>800+ GIT commits</li>
                <li>10+ major projects</li>
                <li>80+ mini projects</li>
              </ul>
              <a href="https://www.masaischool.com/" id="Visit_Site">
                Visit Site
              </a>
            </div>
          </div>
        </div>

        <div className="eductionDetails">
          <img src={Bajkul} alt="Masai Logo" />
          <div id="insideEductionDetails" className="BajkulData">
            <div className="education-details">
              <div>
                <h3>BAJKUL MILANI MAHAVIDYALAYA</h3>
                <p>B.A (Bachelor of Arts)</p>
              </div>

              <p>2019 - 2020</p>
            </div>
            <div className="tech-stacks ">
              <h4
                style={{
                  color: "teal",
                  letterSpacing: "2px",
                  marginBottom: "5px",
                }}
              >
                College Dropout
              </h4>
              <p>
                Enthusiastically studied for a year but financial challenges
                arose. Embracing resilience, I moved forward with determination
                on a new path.
              </p>
            </div>
            <div className="bajkul_btn">
              <a href="http://www.bajkulcollege.org/index.aspx">
                College's Site
              </a>
              <button
                onClick={() => {
                  setId(true);
                }}
              >
                My ID Card
              </button>
            </div>
          </div>
        </div>
      </div>
      {id ? (
        <div
          id="collageId"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={Id} alt="Collage Id" />
          <p
            onClick={() => {
              setId(false);
            }}
            id="Crosshere"
          >&#10060;</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Education;
