import React from "react";
import { navbarStyles, navbarLinkStyles } from "./NavbarStyles";

const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyles}>
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>FincheF</div>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <a href="#home" style={navbarLinkStyles}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={navbarLinkStyles}>
            About Us
          </a>
        </li>
        <li>
          <a href="#services" style={navbarLinkStyles}>
            Services
          </a>
        </li>
        <li>
          <a href="#resources" style={navbarLinkStyles}>
            Resources
          </a>
        </li>
        <li>
          <a href="#case-studies" style={navbarLinkStyles}>
            Case Studies
          </a>
        </li>
        <li>
          <a href="#blog" style={navbarLinkStyles}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" style={navbarLinkStyles}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
