import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function About() {
  return (
    <div className="about-body ">
      <div className="box">
        <div className="content">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="details">
        <p id="text-conversion-for-dark-mode">Hello I'm</p>
        <p>Satyam Soni</p>
        <p id="text-conversion-for-dark-mode">Java Full Stack Developer</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1wUl053VZzfUJuii3u4nwQUq3osrrqIDu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 text-white bg-[#333] rounded-lg hover:bg-blue-700 transition">
              Download CV
            </button>
          </a>
          <a
            href="https://wa.me/+919696050128?text=Hello%20Satyam,%20I%20am%20interested%20in%20hiring%20you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
              Hire Me
            </button>
          </a>
        </div>

        <div className="contact-icon">
          <a
            href="https://www.linkedin.com/in/satyam-soni-833873293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/satyamsoni853"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/p/DBx_18EN2AaKeRsLqID_xmuTQ3g2vOmmbVkt980/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100015348572224"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
