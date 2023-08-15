import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calender from "react-github-calendar";

const GithubStat = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="github"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div
        className="headers react-activity-calendar"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <header>MY GITHUB </header>
        <p>Calender & Stats</p>
      </div>

      <div id="github-streak-stats">
        <Calender username="SK-ALIJAN" />
      </div>

      <div id="statsCard">
        <div id="github-top-langs">
          <img
            src="https://github-readme-stats.vercel.app/api?username=sk-alijan&show_icons=true&locale=en&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
            alt="sk-alijan"
          />
        </div>
        <div id="github-stats-card">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sk-alijan&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
            alt="sk-alijan"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default GithubStat;
