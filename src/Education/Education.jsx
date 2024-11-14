import React from "react";
import "./Education.css";
import schoolimg from "./education.png";
import clgimg from "./experience.png";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

function education() {
  return (
    <div className="education-main">
      <div className="education">
      <p className="label heading ">Get To Know More</p>
      <p className="topic heading  ">Education</p>
      <div className="education-desc">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="collage"
        >
          <img src={clgimg} alt="" />
          <p className="education-type" >Collage</p>
          <p>
            Kamla Nehru Institute Of Physical And Social Sciences,Sultnpur,Up
          </p>
          <p>
            Btech(cse) <br /> (2021-2025)
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="school"
        >
          <img src={schoolimg} alt="" />
          <p className="education-type">School</p>
          <p>
            10th:{" "}
            <span>
              Maharishi Vidhya Mandir Sultanpur <br /> (CBSE borad)
            </span>{" "}
          </p>
          <p>
            12th:{" "}
            <span>
              Sangam Modern Inter College Prayagraj <br /> (Up borad)
            </span>{" "}
          </p>
        </motion.div>
      </div>
      
    </div>
    <div className="training-container">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="training"
        >
          <p >
            <FaCode />
          </p>
          <p  className="education-type" >Training</p>
          <p>
            Java Full Stack Web Development <br />
            JSspider in Bengaluru
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

export default education;
