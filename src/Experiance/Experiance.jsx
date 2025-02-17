import React from "react";
import Jspiderimg from "./Jspider.jpg";
import Apeximg from "./Apex.png";
import { motion } from "framer-motion";

import "./Experiance.css"; // Import the CSS file

function Experience() {
  return (
    <div className="experience-container">
      {/* Left Section - Details */}
      <div className="experience-details">
      <p className="label heading">Explore Recent Experince</p>
      <p className="topic heading">Experince</p>

        <div className="experience-item">
          <div>
            <h3 className="Experiance-heading" >JSpiders - Training</h3>
            <br /><br />
            <p className="experience-text">
            Currently undergoing intensive training in Java Full Stack Web 
            Development, covering Java, SQL, Web Technologies, and React. 
            This training provides hands-on experience in backend and frontend 
            development, database management, and building scalable applications.
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

        <div className="experience-item">
          <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          >
            <img src={Apeximg} alt="Apex Planet" className="experience-img" />
          </motion.div>
          <div>
            <h3 className="Experiance-heading" >Apex Planet - Intern</h3>
            <br /><br />
            <p className="experience-text">
            Completed a virtual internship In Apex Planet Software Pvt.Ltd focused on HTML, CSS, and JavaScript. 
            Worked on designing responsive web layouts, optimizing UI components, 
            and implementing interactive features for web applications.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
