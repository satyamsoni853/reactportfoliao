import React from "react";
import Jspiderimg from "./Jspider.jpg";
import Apeximg from "./Apex.png";
import Codsoftimg from "./Codsoftt.png"; // Updated to use the uploaded file
import { motion } from "framer-motion";
import UniisphereImage from "./Uniisphere.png";

import "./Experiance.css"; // Import the CSS file

function Experience() {
  return (
    <div className="experience-container">
      {/* Left Section - Details */}
      <div className="experience-details">
        <p
          className="label heading text-conversion"
          id="text-conversion-for-dark-mode"
        >
          Explore Recent Experience
        </p>
        <p className="topic heading">Experience</p>

        {/* JSpiders Experience */}
        <div className="experience-item">
          <div>
            <h3
              className="Experiance-heading"
              id="text-conversion-for-dark-mode"
            >
              Uniisphere – Company Website (Real-Time Project)
            </h3>
            <p className="experience-text">
              Currently working on the official company website for Uniisphere.
              Responsible for developing the complete frontend using React JS,
              implementing responsive design, and ensuring optimal user
              experience. Also handling RESTful API integration to enable
              dynamic data rendering and smooth interaction between frontend and
              backend systems. The project follows a modular and scalable code
              structure with focus on real-world deployment practices.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={UniisphereImage}
              alt="Uniisphere"
              className="experience-img"
            />
          </motion.div>
        </div>

        {/* JSpiders Experience */}
        <div className="experience-item">
          <div>
            <h3
              className="Experiance-heading"
              id="text-conversion-for-dark-mode"
            >
              JSpiders - Training
            </h3>
            <p className="experience-text">
              Currently undergoing intensive training in Java Full Stack Web
              Development, covering Java, SQL, Web Technologies, and React. This
              training provides hands-on experience in backend and frontend
              development, database management, and building scalable
              applications.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Jspiderimg} alt="JSpiders" className="experience-img" />
          </motion.div>
        </div>

        {/* Apex Planet Internship */}
        <div className="experience-item">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Apeximg} alt="Apex Planet" className="experience-img" />
          </motion.div>
          <div>
            <h3
              className="Experiance-heading"
              id="text-conversion-for-dark-mode"
            >
              Apex Planet - Intern
            </h3>
            <p className="experience-text">
              Completed a virtual internship at Apex Planet Software Pvt. Ltd,
              focusing on HTML, CSS, and JavaScript. Worked on designing
              responsive web layouts, optimizing UI components, and implementing
              interactive features for web applications.
            </p>
          </div>
        </div>

        {/* CodSoft Internship */}
        <div className="experience-item">
          <div>
            <h3
              className="Experiance-heading"
              id="text-conversion-for-dark-mode"
            >
              CodSoft - Intern
            </h3>
            <p className="experience-text">
              Successfully completed a 4-week virtual internship in Web
              Development at CodSoft. Worked on multiple projects, improving
              skills in front-end development, React.js, and responsive UI
              design.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Codsoftimg}
              alt="CodSoft Internship"
              className="experience-img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
