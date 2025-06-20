import React from "react";
import wtimg from "./wt.webp";
import "./Aboutme.css";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="aboutme">
      <p
        className="label heading text-conversion "
        id="text-conversion-for-dark-mode"
      >
        Know About Me
      </p>
      <p className="topic heading ">About Myself</p>
      <div className="aboutme-container">
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="aboutmeimg"
        >
          <img src={wtimg} alt="" />
        </motion.div>
        <div
          // initial={{ opacity: 0, translateY: "-100%" }}
          // whileInView={{ opacity: 1, translateY: 0 }}
          // transition={{ duration: 1 }}
          className="aboutme-desc"
        >
          <p
            className="cursor typewriter-animation text-2xl font-bold text-conversion"
            id="text-conversion-for-dark-mode"
          >
            Hi i'm Satyam Soni{" "}
          </p>
        <p className="text-2xl font-bold mr-11">
  I'm a dedicated Computer Science student specializing in Java Full Stack Web Development. With hands-on experience in web technologies such as HTML, CSS, JavaScript, React JS, and Java, I have built a solid foundation in developing functional and responsive web applications. Additionally, I have knowledge of J2EE, Servlets, Hibernate, Spring Core, Spring MVC, and Spring Boot, further strengthening my backend development expertise. I am passionate about solving complex problems, continuously learning new skills, and applying my knowledge through real-world projects. 
  Currently, I am working as a <span className="font-semibold">Frontend Developer at Unisphere</span>, where I developed the entire frontend of their real-time company website using React JS and integrated RESTful APIs to manage dynamic data flow. 
  My goal is to contribute effectively to a dynamic team and deliver impactful solutions.
</p>

        </div>
      </div>
    </div>
  );
}

export default Aboutme;
