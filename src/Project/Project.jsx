import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import porimg from './p.png'; // Assuming these images exist in your project
import wimg from './w.png';
import bmiimg from './bmi.png';
import Pgimg from './pg.png'
import Todoimg from './todo.png'
import Calcimg from './calc.png'

function Project() {
  return (
    <div className="project-main">
      <p className="label heading " id="text-conversion-for-dark-mode">Explore Recent Innovations</p>
      <p className="topic heading">Projects</p>
      <div className="project">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="project-container"
        >
          <div className="project-wrapper">
            <div
              className="banner-image-1 banner-image"
              style={{ backgroundImage: `url(${wimg})` }} 
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode" >Weather-App</h1>
            <p>
              Built a weather app with ReactJS,<br /> delivering real-time weather updates.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/weather-app-react">Github</a>
            </button>
            <button className="btn fill">
              <a href="https://weather-app-react-4j4r.vercel.app/">Live Demo</a>
            </button>
          </div>
        </motion.div>

        <div className="project-container">
          <div className="project-wrapper">
            <div
              className="banner-image-2 banner-image"
              style={{ backgroundImage: `url(${porimg})` }} // Setting background image
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode"  >Portfolio</h1>
            <p>
              Created a responsive portfolio website <br />
              with HTML, CSS, and  JavaScript.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/portfolio2/commit/03f653689b5df5122806170a09cfa4f252446cfa">Github</a>
            </button>
            <button className="btn fill">
              <a href="https://portfolio2-olive-nine.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="project-container"
        >
          <div className="project-wrapper">
            <div
              className="banner-image-3 banner-image"
              style={{ backgroundImage: `url(${bmiimg})` }} // Setting background image
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode"  >BMI Calculator</h1>
            <p>
              Developed a BMI calculator using JavaScript 
              health insights based on their results.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/bmi-new" >Github</a>
            </button>
            <button className="btn fill">
              <a href="https://bmi-new-sable.vercel.app/">Live Demo</a>
            </button>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
          className="project-container"
        >
          <div className="project-wrapper">
            <div
              className="banner-image-1 banner-image"
              style={{ backgroundImage: `url(${Todoimg})` }} // Setting background image
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode" >Todo List</h1>
            <p>
            Created a To-Do List app using HTML, CSS, and JavaScript for task management
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/Todo-list">Github</a>
            </button>
            <button className="btn fill">
              <a href="https://crazytodolist.netlify.app/">Live Demo</a>
            </button>
          </div>
        </motion.div>

        <div className="project-container">
          <div className="project-wrapper">
            <div
              className="banner-image-2 banner-image"
              style={{ backgroundImage: `url(${Pgimg})` }} // Setting background image
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode" >Password Generator </h1>
            <p>
            Developed a Password Generator using HTML, CSS, and JavaScript for secure password creation."
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/PG">Github</a>
            </button>
            <button className="btn fill">
              <a href="https://pg-git-main-satyam-sonis-projects.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="project-container"
        >
          <div className="project-wrapper">
            <div
              className="banner-image-3 banner-image"
              style={{ backgroundImage: `url(${Calcimg})` }} // Setting background image
            ></div>
            <h1 className="font-extrabold"  id="text-conversion-for-dark-mode" > Calculator</h1>
            <p>
            Created a calculator using HTML, CSS, and JavaScript for basic arithmetic operations.
            </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">
              <a href="https://github.com/satyamsoni853/calc">Github</a>
            </button>
            <button className="btn fill">
              <a href="https://calc-ten-chi.vercel.app/">Live Demo</a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
