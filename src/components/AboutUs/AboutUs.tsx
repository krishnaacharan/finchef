import React from "react";
import { aboutUsStyles, aboutTextStyles } from "./AboutUsStyles";

const AboutUs: React.FC = () => {
  return (
    <section style={aboutUsStyles}>
      <div style={aboutTextStyles}>
        <h2>About FincheF</h2>
        <p>
          FincheF is dedicated to empowering university students by enhancing
          their financial literacy and helping them navigate their financial
          futures with confidence.
        </p>
        <blockquote>
          <p>
            "Thanks to FincheF, I now have a solid understanding of investment
            strategies!" - Student Testimonial
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutUs;
