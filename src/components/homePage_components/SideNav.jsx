import React from "react";
import "../../../style_components/sideNav.css";
import { menuLink } from "../../utils/menuLink";
import { Link } from "react-router-dom";

const SideNav = ({ toggleMenu }) => {
  return (
    <div
      className="side-nav"
      style={toggleMenu ? { display: "flex" } : { display: "none" }}
    >
      {menuLink.map((link) => {
        const { id, linkName, linkTo } = link;
        return (
          <Link key={id} to={linkTo}>
            {linkName}
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
