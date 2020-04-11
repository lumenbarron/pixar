import React from "react";
import "./../styles/footer.css";
import githublogo from "../styles/gitHub-logo.png";

const Footer = () => {
  return (
    <footer className="global-footer container">
      <div className="row" style={{margin: 0}}>
        <div className="col s2"></div>
        <div className="col s8 disney-global">
          <a
            href="https://github.com/lumenbarron"
            target="_blank"
            rel="noopener noreferrer"
            className="code-links"
          >
            <p className="disney-link">
              Made with ❤ by Lumenbarron
              <img
                alt="github"
                type="image"
                className="logo-git"
                src={githublogo}
              />
            </p>
          </a>
        </div>
        <div className="col s2"></div>
      </div>
    </footer>
  );
};

export default Footer;
