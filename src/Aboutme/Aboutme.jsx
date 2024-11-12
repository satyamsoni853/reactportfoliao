import React from "react";
import wtimg from "./wt.webp";
import "./Aboutme.css";
import {motion} from 'framer-motion'

function Aboutme() {
  return (
    <div className="aboutme">
      <p className="label heading ">Know About Me</p>
      <p className="topic heading ">About Me</p>
      <div className="aboutme-container">
        <motion.div
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:2}}
        
        
        className="aboutmeimg">
          <img src={wtimg} alt="" />
        </motion.div>
        <motion.div
        initial={{opacity:0,translateX:"-100%"}}
        whileInView={{opacity:1,translateX:0}}
        transition={{duration:2}}
         className="aboutme-desc">
          <p class="cursor typewriter-animation">Hi i'm Satyam Soni </p>
          <p>
            {" "}
            I'm a dedicated and passionate Computer Science student specializing
            in Java Full Stack Web Development. With hands-on experience in web
            technologies, including HTML, CSS, JavaScript, React JS, and Java,
            I've developed a solid foundation in building functional and
            responsive web applications. I enjoy solving complex problems,
            continuously learning new skills, and working on real-world projects
            to expand my technical expertise. My goal is to contribute
            effectively to a dynamic team, delivering solutions that make a
            meaningful impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
