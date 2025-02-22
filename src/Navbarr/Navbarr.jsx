import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll'; // Ensure you import Link from 'react-scroll'
import "./Navbarr.css";

function Navbarr() {
  const [showsidebarr, Setshowsidebarr] = useState(true);

  const toggle = () => {
    Setshowsidebarr(!showsidebarr);
  };

  return (
    <div className="navbarr">
      <div className="sidebarr">
        <ul>
          <li>Satyam Soni</li>
          <li>
            {/* Use Link from react-scroll for smooth scrolling */}
            <Link to="aboutme" smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500}>
              My Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>

          <li className="rbarrr" onClick={toggle}>
            {showsidebarr ? <CiMenuBurger /> : <IoCloseSharp />}
          </li>
        </ul>
      </div>
      {showsidebarr ? null : (
        <ul className="closebarr">
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500}>
              My Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbarr;
