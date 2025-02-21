import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import "./Darkmode.css";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark mode if no theme is set
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button className="darkmode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <MdDarkMode />
    </button>
  );
}

export default Darkmode;
