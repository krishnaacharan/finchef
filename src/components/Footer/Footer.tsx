import React from "react";
import {
  footerStyles,
  footerLinkStyles,
  footerLinkHoverStyles,
} from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; 2024 FincheF. All Rights Reserved.</p>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <a
            href="/about"
            style={footerLinkStyles}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = footerLinkHoverStyles.color)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = footerLinkStyles.color)
            }
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/services"
            style={footerLinkStyles}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = footerLinkHoverStyles.color)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = footerLinkStyles.color)
            }
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/blog"
            style={footerLinkStyles}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = footerLinkHoverStyles.color)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = footerLinkStyles.color)
            }
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="/contact"
            style={footerLinkStyles}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = footerLinkHoverStyles.color)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = footerLinkStyles.color)
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
