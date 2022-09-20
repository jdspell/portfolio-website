import React from "react";

import NavbarLink from "./navbarLink";

const navbarLinks = ["Top", "About", "Projects", "Contact"];
const navbarLinkTo = [
  "intro",
  "about-section",
  "projects-section",
  "contact-section",
];

const Header = () => {
  return (
    <div className="particleHeader">
      <nav className="navbar">
        {navbarLinks.map((link, idx) => {
          return (
            <NavbarLink
              key={idx}
              navlinkText={link}
              activeClass="active"
              navlinkTo={navbarLinkTo[idx]}
              spy={true}
              smooth="true"
              offset={-70}
              duration={500}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
