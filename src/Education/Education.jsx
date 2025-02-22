import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import { FaCode, FaSchool } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";

function Education() {
  return (
    <div className="education-main">
      <div className="education">
        <p
          className="label heading text-conversion"
          id="text-conversion-for-dark-mode"
        >
          Get To Know More
        </p>
        <p className="topic heading">Education</p>
        <div className="education-desc">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="college"
          >
            <IoSchoolOutline className="text-green-500 text-2xl icon-style  hover:text-yellow-500" />
            <p className="education-type">School</p>
            <p>
              10th:{" "}
              <span>
                Maharishi Vidya Mandir, Sultanpur <br /> (CBSE Board)
              </span>
            </p>
            <p>
              12th:{" "}
              <span>
                Sangam Modern Inter College, Prayagraj <br /> (U.P Board)
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="school"
          >
            <FaSchool className="text-blue-500 text-2xl icon-style  hover:text-yellow-500" />
            <p className="education-type">College</p>
            <p>
              Kamla Nehru Institute Of Physical And Social <br /> Sciences,
              Sultanpur, U.P
            </p>
            <p>
              BTech (CSE) <br /> (2021-2025)
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
          <FaCode className="text-red-500 text-2xl hover:text-yellow-500 icon-style" />
          <p className="education-type">Training</p>
          <p>
            Java Full Stack Web Development <br />
            JSpiders, Bengaluru
          </p>
          <p>April (2024) - Current</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
