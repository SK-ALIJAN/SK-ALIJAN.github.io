import React from "react";

const GithubStat = () => {
  return (
    <div id="github">
      <div className="react-activity-calendar">github calendar</div>
      <div id="github-streak-stats">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=sk-alijan&show_icons=true&locale=en&layout=compact"
          alt="sk-alijan"
        />
      </div>
      <div id="github-top-langs">
        <img
          src="https://github-readme-stats.vercel.app/api?username=sk-alijan&show_icons=true&locale=en"
          alt="sk-alijan"
        />
      </div>
      <div id="github-stats-card">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=sk-alijan&"
          alt="sk-alijan"
        />
      </div>
    </div>
  );
};

export default GithubStat;
