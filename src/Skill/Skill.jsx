import React from "react";
import "./Skill.css";
import htmlimg from "./html.png";
import cssimg from "./css-3.png";
import javaimg from "./java.png";
import reactimg from "./reactjs.webp";
import servletimg from "./servelt.webp";
import sqlimg from "./sql.webp";
import jsimg from "./j.webp";
import tailwindimg from "./tailwind.webp";
import bootstrapimg from "./b.webp";
import j2eeimg from "./j2ee.jpeg";
import microserviceimg from "./ms.webp";
import hibernateimg from "./hibernateimage.webp";
import springbootimg from "./SpringBootimage.webp";

function Skill() {
  return (
    <div id="skill">
      <p className="label heading">Browse My Recent</p>
      <p className="heading topic">My Skill</p>
      <div className="body">
        <div className="timeline">
          <div className="container left-container">
            <img src={htmlimg} alt="HTML" />
            <div className="text-box">
              <p className="topic heading topic-know">HTML</p>
              <p className="skill-desc">
                Crafting responsive, accessible web pages with clean HTML and SEO-friendly layouts for a smooth user experience.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={cssimg} alt="CSS" />
            <div className="text-box">
              <p className="topic heading topic-know">CSS</p>
              <p className="skill-desc">
                Creating responsive, visually appealing designs using CSS, with Flexbox, Grid, and animations for a seamless user experience.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={jsimg} alt="JavaScript" />
            <div className="text-box">
              <p className="topic heading topic-know">Java Script</p>
              <p className="skill-desc">
                Building interactive web applications with JavaScript, using modern frameworks for efficient, engaging user experiences.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={reactimg} alt="React JS" />
            <div className="text-box">
              <p className="topic heading topic-know">React JS</p>
              <p className="skill-desc">
                Creating high-performing user interfaces with React JS, emphasizing reusable components, state management, and interactivity.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={javaimg} alt="Java" />
            <div className="text-box">
              <p className="topic heading topic-know">Java</p>
              <p className="skill-desc">
                Skilled in Java programming, focusing on OOP, data structures, and scalable solutions using Java frameworks for full-stack development.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={sqlimg} alt="SQL" />
            <div className="text-box">
              <p className="topic heading topic-know">SQL</p>
              <p className="skill-desc">
                Proficient in SQL for designing and managing databases, optimizing queries, and ensuring data integrity for scalable applications.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={servletimg} alt="Servlet" />
            <div className="text-box">
              <p className="topic heading topic-know">Servlet</p>
              <p className="skill-desc">
                Proficient in Java Servlets for dynamic web applications, managing HTTP requests, session data, and integrating with front-end components.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={j2eeimg} alt="J2EE" />
            <div className="text-box">
              <p className="topic heading topic-know">J2EE</p>
              <p className="skill-desc">
                Experienced in Java EE technologies, developing scalable, secure enterprise applications using Servlets, JSP, and EJB.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={microserviceimg} alt="Microservices" />
            <div className="text-box">
              <p className="topic heading topic-know">Micro services</p>
              <p className="skill-desc">
                Designing scalable, distributed systems with Microservices, ensuring modular, maintainable architectures using Spring Boot and RESTful APIs.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={hibernateimg} alt="Hibernate" />
            <div className="text-box">
              <p className="topic heading topic-know">Hibernate</p>
              <p className="skill-desc">
                Leveraging Hibernate ORM for efficient data management, ensuring seamless database interaction with Java applications.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={springbootimg} alt="Spring Boot" />
            <div className="text-box">
              <p className="topic heading topic-know">Spring Boot</p>
              <p className="skill-desc">
                Developing RESTful APIs and enterprise applications using Spring Boot, focusing on rapid development, security, and scalability.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <img src={tailwindimg} alt="Tailwind CSS" />
            <div className="text-box">
              <p className="topic heading topic-know">Tailwind CSS</p>
              <p className="skill-desc">
                Tailwind CSS: A utility-first framework that empowers me to create responsive, modern UIs with speed, flexibility, and precision styling.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <img src={bootstrapimg} alt="Bootstrap" />
            <div className="text-box">
              <p className="topic heading topic-know">Boot strap</p>
              <p className="skill-desc">
                Using Bootstrap to create responsive, mobile-first designs with ease, harnessing its powerful grid system, prebuilt components, and extensive customization options for efficient, scalable UIs.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skill;
