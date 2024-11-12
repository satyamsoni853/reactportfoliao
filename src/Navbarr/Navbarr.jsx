import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbarr.css";
import { Link } from "react-router-dom";

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
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/skill">My Skill</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>

          <li className="rbarrr" onClick={toggle}>
            {" "}
            {showsidebarr ? <CiMenuBurger /> : <IoCloseSharp />}{" "}
          </li>
        </ul>
      </div>
      {showsidebarr ? null : (
        <ul className="closebarr">
          <li>
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/skill">My Skill</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbarr;
