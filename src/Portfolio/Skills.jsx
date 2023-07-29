import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let data = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
    cate: "frontend",
  },
  {
    name: "CSS",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
    cate: "frontend",
  },
  {
    name: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    cate: "frontend",
  },
  {
    name: "React",
    img: "https://cdn-icons-png.flaticon.com/128/3334/3334886.png",
    cate: "frontend",
  },
  {
    name: "Redux",
    img: "https://alih6051.github.io/static/media/redux.1b4bb5fceb01b19da59d.png",
    cate: "frontend",
  },
  {
    name: "Typescript",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    cate: "frontend",
  },
  {
    name: "Chakra Ui",
    img: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
    cate: "frontend",
  },
  {
    name: "Nodejs",
    img: "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
    cate: "backend",
  },
  {
    name: "Express",
    img: "https://alih6051.github.io/static/media/express.607abe4a368d2d6ee1a9.png",
    cate: "backend",
  },
  {
    name: "Mongodb",
    img: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
    cate: "backend",
  },
  {
    name: "Mongoose",
    img: "https://cdn-icons-png.flaticon.com/128/185/185753.png",
    cate: "backend",
  },
  {
    name: "Git",
    img: "https://cdn-icons-png.flaticon.com/128/4494/4494748.png",
    cate: "tools",
  },
  {
    name: "Vs Code",
    img: "https://cdn-icons-png.flaticon.com/128/906/906324.png",
    cate: "tools",
  },
  {
    name: "Postman",
    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postman-512.png",
    cate: "tools",
  },
  {
    name: "Npm",
    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/npm-64.png",
    cate: "tools",
  },
  {
    name: "CodeSandbox",
    img: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-64.png",
    cate: "tools",
  },
  {
    name: "Netlify",
    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png",
    cate: "tools",
  },
];

const Skills = () => {
  let [state, setState] = useState("all");
  let [details, setDetails] = useState([]);

  useEffect(() => {
    AOS.init();
    let filtered = data.filter((ele) => {
      if (state == "all") return data;
      else {
        return state === ele.cate;
      }
    });
    setDetails(filtered);
  }, [state]);

  let btn = (click) => {
    setState(click);
  };
  console.log(details);
  return (
    <div id="skills">
      <div
        className="headers"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <header>What I Expart ? </header>
        <p>Tech Stack & Tools</p>
      </div>

      <div className="Buttons spacehere" data-aos="fade-right" data-aos-duration="1500">
        <button
          onClick={() => {
            btn("all");
          }}
          className={state === "all" ? "Actived" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            btn("frontend");
          }}
          className={state === "frontend" ? "Actived" : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => {
            btn("backend");
          }}
          className={state === "backend" ? "Actived" : ""}
        >
          Backend
        </button>
        <button
          onClick={() => {
            btn("tools");
          }}
          className={state === "tools" ? "Actived" : ""}
        >
          Tools
        </button>
      </div>

      <div className="Display">
        {details.map((ele) => {
          return (
            <div key={ele.name} data-aos="fade-right" className="allSkills skills-card">
              <img src={ele.img} alt={ele.name} />
              <p>{ele.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
