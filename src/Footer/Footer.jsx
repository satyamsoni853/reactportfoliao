import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'  >
        <div>
        <p>© 2014-2025  All rights reserved. </p>
        </div>
        <div className="footer-contact-icon">
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
  )
}

export default Footer
