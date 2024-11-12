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
                Building structured, accessible, and responsive web pages with
                clean and semantic HTML. I focus on creating well-organized
                layouts that enhance user experience and maintain best practices
                for SEO, making my sites both user-friendly and search-engine
                friendly.
              </p>

              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={cssimg} alt="" />
            <div className="text-box">
              <p className="topic heading">CSS</p>
              <p className="skill-desc">
                Crafting visually appealing, responsive designs with CSS,
                utilizing modern techniques like Flexbox, Grid, and animations
                to bring web pages to life. My CSS skills focus on creating
                clean, scalable styles that enhance both usability and aesthetic
                appeal across all devices.
              </p>

              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={jsimg} alt="" />
            <div className="text-box">
              <p className="topic heading">JavaScrpit</p>
              <p className="skill-desc">
                Developing interactive and dynamic web applications with
                JavaScript, leveraging modern frameworks and libraries to build
                seamless user experiences. My JavaScript skills focus on
                efficient, scalable code, bringing functionality to the front
                end and enhancing user engagement.
              </p>

              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={reactimg} alt="" />
            <div className="text-box">
              <p className="topic heading">React Js</p>
              <p className="skill-desc">
                Building efficient and high-performing user interfaces with
                React JS, focusing on reusable components, state management, and
                seamless user interactions. My expertise includes leveraging
                React’s ecosystem to create responsive, interactive, and
                scalable web applications.
              </p>

              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={javaimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Java</p>
            <p className="skill-desc">Proficient in Java programming with a focus on object-oriented principles, building robust and efficient applications. My experience includes working with core Java concepts, data structures, and developing scalable solutions using Java frameworks for full-stack development.</p>

              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container ">
            <img src={sqlimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >SQL</p>
            <p className="skill-desc" >Skilled in SQL for designing and managing databases, performing complex queries, and ensuring data integrity. Experienced in creating efficient database structures, optimizing query performance, and managing relational databases to support scalable applications.</p>

              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container ">
            <img src={serveltimg} alt="" />
            <div className="text-box">
            <p className='topic heading' >Servelt</p>


            <p className="skill-desc">Experienced in Java Servlets for building dynamic, server-side web applications. Skilled in handling HTTP requests and responses, managing session data, and integrating servlets with front-end components to create interactive, robust web solutions.</p>

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
