import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Ageer.pdf";
import { motion } from "framer-motion";
function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Front end projects development using React, Next, Js, HTML&Css
        </span>
        <a href={Resume} download>
          <button className="button s-button">DownloadCV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <div style={{ left: "10rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Paint, Sketch"}
            />
          </div>
        </motion.div>
        {/* Second Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JS, ReactJS"}
          />
        </motion.div>

        {/* Third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "10rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"HTML, CSS, Bootstrap, Charka UI"}
          />
        </motion.div>
      </div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
}

export default Services;
