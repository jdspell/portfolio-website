import React from "react";
import { Link } from "react-scroll";

const NavbarLink = ({
  navlinkText,
  activeClass,
  navlinkTo,
  spy,
  smooth,
  offset,
  duration,
}) => {
  return (
    <Link
      activeclass={activeClass}
      to={navlinkTo}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
    >
      {navlinkText}
    </Link>
  );
};

export default NavbarLink;
