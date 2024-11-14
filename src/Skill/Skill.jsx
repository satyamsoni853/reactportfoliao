import React from "react";
import "./Skill.css";
import htmlimg from "./html.png";
import cssimg from "./css-3.png";
import javaimg from "./java.png";
import reactimg from "./reactjs.webp";
import serveltimg from "./servelt.webp";
import sqlimg from "./sql.webp";
import jsimg from "./j.webp";
import tailwindimg from './tailwind.webp';
import bootstrapimg from './b.webp'

function Skill() {
  return (
    <div>
      <p className="label heading">Browse My Recent</p>
      <p className="heading topic">My Skill</p>
      <div className="body">
        <div className="timeline">
          <div className="container left-container">
            <img src={htmlimg} alt="" />

            <div className="text-box">
              <p className="topic heading">HTML</p>
              <p className="skill-desc">
  Crafting responsive, accessible web pages with clean HTML and SEO-friendly layouts for a smooth user experience.
</p>


              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={cssimg} alt="" />
            <div className="text-box">
              <p className="topic heading">CSS</p>
              <p className="skill-desc">
  Creating responsive, visually appealing designs using CSS, with Flexbox, Grid, and animations for a seamless user experience.
</p>


              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={jsimg} alt="" />
            <div className="text-box">
              <p className="topic heading">JavaScrpit</p>
              <p className="skill-desc">
  Building interactive web applications with JavaScript, using modern frameworks for efficient, engaging user experiences.
</p>


              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={reactimg} alt="" />
            <div className="text-box">
              <p className="topic heading">React Js</p>
              <p className="skill-desc">
  Creating high-performing user interfaces with React JS, emphasizing reusable components, state management, and interactivity.
</p>


              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={javaimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Java</p>
            <p className="skill-desc">
  Skilled in Java programming, focusing on OOP, data structures, and scalable solutions using Java frameworks for full-stack development.
</p>


              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container ">
            <img src={sqlimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >SQL</p>
            <p className="skill-desc">
  Proficient in SQL for designing and managing databases, optimizing queries, and ensuring data integrity for scalable applications.
</p>


              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={serveltimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Servelt</p>


            <p className="skill-desc">
  Proficient in Java Servlets for dynamic web applications, managing HTTP requests, session data, and integrating with front-end components.
</p>


              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container ">
            <img src={tailwindimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Tailwind</p>
              <p className="skill-desc">Tailwind CSS: A utility-first framework that empowers me to create responsive, modern UIs with speed, flexibility, and precision styling.</p>

              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={bootstrapimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Bootstrap</p>


            <p className="skill-desc">Using Bootstrap to create responsive, mobile-first designs with ease, harnessing its powerful grid system, prebuilt components, and extensive customization options for efficient, scalable UIs.</p>

              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
