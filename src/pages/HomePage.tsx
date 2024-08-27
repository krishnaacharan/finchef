import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Resources from "../components/Resources/Resources";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="case-studies">
        <CaseStudies />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
