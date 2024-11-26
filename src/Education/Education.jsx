import React from "react";
import "./Education.css";
import schoolimg from "./education.png";
import clgimg from "./experience.png";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

function Education() { 'Education'
  return (
    <div className="education-main">
      <div className="education">
        <p className="label heading">Get To Know More</p>
        <p className="topic heading">Education</p>
        <div className="education-desc">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="college"  
          >
            <img src={clgimg} alt="" />
            <p className="education-type">College</p>  {/* Changed 'Collage' to 'College' */}
            <p>
              Kamla Nehru Institute Of Physical And Social <br /> Sciences, Sultanpur, UP
            </p>
            <p>
              Btech (CSE) <br /> (2021-2025)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="school"
          >
            <img src={schoolimg} alt="" />
            <p className="education-type">School</p>
            <p>
              10th:{" "}
              <span>
                Maharishi Vidhya Mandir Sultanpur <br /> (CBSE board) {/* Corrected 'borad' to 'board' */}
              </span>{" "}
            </p>
            <p>
              12th:{" "}
              <span>
                Sangam Modern Inter College Prayagraj <br /> (UP board) {/* Corrected 'borad' to 'board' */}
              </span>{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="training-container">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="training"
        >
          <p>
            <FaCode />
          </p>
          <p className="education-type">Training</p>
          <p>
            Java Full Stack Web Development <br />
            JSpider in Bengaluru
          </p>
          <p>
            April (2024)- <br />
            Current
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;  // Corrected to 'Education' to match the function name
