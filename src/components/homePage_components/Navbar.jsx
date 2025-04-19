import React, { useEffect } from "react";
import "../../../style_components/navbar.css";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import SideNav from "./SideNav";
import { menuLink } from "../../utils/menuLink";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu, showMenu }) => {
  // disable side-nav visibility on small screen
  function checkMediaQuery() {
    const myDiv = document.getElementById("sideNav");
    if (window.matchMedia("(max-width: 881px)").matches) {
      myDiv.style.display = "block"; // Show div
    } else {
      myDiv.style.display = "none"; // Hide div
    }
  }

  // Check on load
  useEffect(() => {
    checkMediaQuery();
  }, []);

  // Check on window resize
  window.addEventListener("resize", checkMediaQuery);

  ///////////////////////////////////////////////////////////////

  return (
    <>
      <div className="nav-container" >
        <div className="nav-logo">
          <img src="./images/i-fitness-logo.png" alt="logo" width={300} />
        </div>
        <div className="nav-menu">
          <ul>
            {menuLink.map((link) => {
              const { id, linkName, linkTo } = link;
              return (
                <li key={id}>
                  <Link to={linkTo}>{linkName}</Link>
                </li>
              );
            })}
          </ul>
          <div className="hamburger-btn">
            {toggleMenu ? (
              <FiX onClick={() => showMenu()} />
            ) : (
              <FiAlignRight onClick={() => showMenu()} />
            )}
          </div>
        </div>
        <div id="sideNav">
          <SideNav toggleMenu={toggleMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
