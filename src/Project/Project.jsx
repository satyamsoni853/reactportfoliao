import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import porimg from './p.png'
import wimg from './w.png'
import bmiimg from './bmi.png'

function Project() {
  return (
    <div className="project-main">
      <p className="label heading ">Browse You Recent</p>
      <p className="topic heading ">Project</p>
      <div className="project">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          class="project-container"
        >
          <div class="project-wrapper">
            <div class="banner-image-1 banner-image "> </div>
            <h1>Weathre-App</h1>
            <p>
            Built a weather app with ReactJS,<br /> delivering real-time weather updates 
            </p>
          </div>
          <div class="button-wrapper">
            <button class="btn outline"><a href="https://github.com/satyamsoni853/weather-app-react"> Gitub</a></button>
            <button class="btn fill"><a href="https://weather-app-react-4j4r.vercel.app/">Live Demo</a></button>
          </div>
        </motion.div>
        <div class="project-container">
          <div class="project-wrapper">
            <div class="banner-image-2 banner-image "> </div>
            <h1> Portfoliao</h1>
            <p>
            Created a responsive portfolio website  <br />
             with HTML, CSS, and <br/> Javascrpit
            </p>
          </div>
          <div class="button-wrapper">
            <button class="btn outline"><a href="
            https://github.com/satyamsoni853/portfolio2/commit/03f653689b5df5122806170a09cfa4f252446cfa">Github</a></button>
            <button class="btn fill"><a href="
            https://portfolio2-olive-nine.vercel.app/">Live Demo</a></button>
          </div>
        </div>
        <motion.div
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1}}
          class="project-container"
        >
          <div class="project-wrapper">
            <div class="banner-image-3 banner-image "> </div>
            <h1> Bmi Calcultor</h1>
            <p>
            Developed a BMI calculator using JavaScript <br />
            health insights based on their results.
            </p>
          </div>
          <div class="button-wrapper">
            <button class="btn outline"><a href="https://github.com/satyamsoni853/bmi-new">Github</a></button>
            <button class="btn fill"><a href="https://bmi-new-sable.vercel.app/">Live Demo</a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
