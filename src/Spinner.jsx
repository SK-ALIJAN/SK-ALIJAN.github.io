import React from "react";
import Spinner from "react-spinkit";
import AOS from "aos";
import "aos/dist/aos.css";

const Spinners = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%,50%)",
      }}
    >
      <Spinner
        name="cube-grid"
        color="teal"
        style={{ width: "5rem", height: "5rem" }}
      />
      <p
        style={{
          color: "teal",
          width: "max-content",
          fontWeight: "600",
          letterSpacing: "2px",
          marginTop:"10px"
        }}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Welcome to my portfolio
      </p>
    </div>
  );
};

export default Spinners;
