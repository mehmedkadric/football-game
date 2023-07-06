import React from "react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="info-item">
          <span>
            <SiGmail />
          </span>
          <a href="mailto:kadricze@gmail.com">kadricze@gmail.com</a>
        </div>
        <div className="info-item">
          <span>
            <SiLinkedin />
          </span>
          <a
            href="https://www.linkedin.com/in/mehmed-kadric-b31b1386/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="info-item">
          <span>
            <SiGithub />
          </span>
          <a
            href="https://github.com/mehmedkadric"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
