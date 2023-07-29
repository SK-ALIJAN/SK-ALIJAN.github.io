import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

let data = [
  {
    name: "My trip",
    cate: "react",
    details:
      "Myrip: Simplify travel bookings, unlock unforgettable vacations, and explore the world with ease.",
    MadeBy: "This is individual project made in 10 days",
    tech: "REACT JS, CSS, Mock Server, Local Storage",
    image: [
      "https://user-images.githubusercontent.com/106768235/252966435-b328bdaf-2853-48ee-b95a-e2b58325e726.png",
      "https://user-images.githubusercontent.com/106768235/252967030-01062312-45a2-4690-ab9a-0bc9fd009b73.png",
      "https://user-images.githubusercontent.com/106768235/252967900-e17f9dc3-f17c-4b13-8487-6aebe64b1a76.png",
      "https://user-images.githubusercontent.com/106768235/252967555-a4f88720-c74b-4f01-9b7e-075d0bdd765f.png",
      "https://user-images.githubusercontent.com/106768235/252969534-5f0e7468-f651-4afd-ab3b-626946067e8f.png",
    ],
    demo: "https://my-trip-wine.vercel.app/",
    github: "https://github.com/SK-ALIJAN/Mytrip",
  },
  {
    name: "Blueberry.com",
    cate: "HTML",
    details:
      "Blueberry: Elevate your shopping with high-quality products across categories. Explore a dynamic e-commerce experience.",
    MadeBy: "This is collaborative project made by 3 person in 4 days",
    tech: "HTML, CSS, JavaScript, Mock Server, Local Storage",
    image: [
      "https://user-images.githubusercontent.com/106768235/238190193-0c35fcc1-c88a-4a38-9290-9f9b0b6e4190.png",
      "https://user-images.githubusercontent.com/106768235/238191173-88159bf7-261e-4255-8365-5cccec56d3a4.png",
      "https://user-images.githubusercontent.com/106768235/238191368-25a8042f-7066-494a-9452-4b5755a85ccb.png",
      "https://user-images.githubusercontent.com/106768235/238191617-9e7d2e4b-909d-448e-8211-5720545b507b.png",
      "https://user-images.githubusercontent.com/106768235/238196655-33c31c6f-95e4-4be7-afa7-f55d0e5fe673.png",
    ],
    demo: "https://blueberry-site.netlify.app/",
    github: "https://github.com/SK-ALIJAN/Blueberry.com",
  },
  {
    name: "Triptribe.com",
    cate: "HTML",
    details:
      "TripTribe.com: Your gateway to dream vacations and thrilling adventures. Browse and book from a wide range of exotic destinations and unforgettable travel experiences.",
    MadeBy: "This is collaborative project made by 3 person in 4 days",
    tech: "HTML, CSS, JavaScript, Mock Server, Local Storage",
    image: [
      "https://user-images.githubusercontent.com/106768235/238199086-36828ded-f6d5-40c2-9edf-87c2a317fbb7.png",
      "https://user-images.githubusercontent.com/106768235/238199485-e0f60f64-cdeb-4b2c-8741-77bff9641ce1.png",
      "https://user-images.githubusercontent.com/106768235/238199846-68074bfd-dc07-4ee3-bea2-3492ffedaf7a.png",
      "https://user-images.githubusercontent.com/106768235/238199587-00664966-aa37-41fd-862c-e8607b5ae4ee.png",
      "https://user-images.githubusercontent.com/106768235/238199638-092997a6-6edb-4c4f-a57d-56d23e23b414.png",
    ],
    demo: "https://trip-tribe.netlify.app/",
    github: "https://github.com/SK-ALIJAN/Triptribe.com",
  },
  {
    name: "DUKAN",
    cate: "HTML",
    details:
      "Solo-developed e-commerce site with authentication, 'Add to Cart,' and user accounts. Seamless shopping experience.",
    MadeBy: "This is individual project made in 4 days",
    tech: "HTML, CSS, JavaScript, Local Storage",
    image: [
      "https://user-images.githubusercontent.com/106768235/255213726-2abd400c-508e-4451-a80f-a2c949634d6e.png",
      "https://user-images.githubusercontent.com/106768235/255213830-3a38ecd8-5d2e-41b5-a261-3b5f293517ef.png",
      "https://user-images.githubusercontent.com/106768235/255213895-60d1b090-9425-4479-9562-126c8740d9aa.png",
      "https://user-images.githubusercontent.com/106768235/255213996-ad9bf0a6-8a01-4c1d-b47a-308c299de6b5.png",
      "https://user-images.githubusercontent.com/106768235/255214102-df986b59-e4af-48a1-86b3-33d8e3e09d51.png",
    ],
    demo: "https://my-dukan-e-commerce.netlify.app/index.html",
    github: "https://github.com/SK-ALIJAN/E-Commerce-site-DUKAN",
  },
];

const Projects = () => {
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

  return (
    <div id="projects">
      <div
        className="headers"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <header>My Recent Work</header>
        <p>Project</p>
      </div>
      <div className="Buttons" data-aos="fade-right" data-aos-duration="1500">
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
            btn("react");
          }}
          className={state === "react" ? "Actived" : ""}
        >
          React
        </button>
        <button
          onClick={() => {
            btn("MERN");
          }}
          className={state === "MERN" ? "Actived" : ""}
        >
          MERN
        </button>
        <button
          onClick={() => {
            btn("HTML");
          }}
          className={state === "HTML" ? "Actived" : ""}
        >
          HTML
        </button>
      </div>
      <div id="ProjectShowCase">
        {details.map((ele) => {
          return (
            <div
              key={ele.name}
              data-aos-anchor-placement="center-bottom"
              className="AllProjects project-card"
              data-aos="fade-up"
            >
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                stopOnHover={false}
                showThumbs={false}
              >
                <img src={ele.image[0]} alt="" />
                <img src={ele.image[1]} alt="" />
                <img src={ele.image[2]} alt="" />
                <img src={ele.image[3]} alt="" />
                <img src={ele.image[4]} alt="" />
              </Carousel>
              <p className="projects_title">{ele.name}</p>
              <p>{ele.details}</p>
              <p className="techStack">
                <span>Tech Stack :</span> {ele.tech}
              </p>
              <p className="MadeBy">{ele.MadeBy}</p>
              <div>
                <a href={ele.demo}>
                  <AiOutlineGlobal style={{ marginRight: "10px" }} /> Demo
                </a>
                <a href={ele.github}>
                  <AiFillGithub style={{ marginRight: "10px" }} /> Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
