import React from "react";
import {
  servicesStyles,
  serviceItemStyles,
  serviceIconStyles,
} from "./ServicesStyles";

const Services: React.FC = () => {
  return (
    <section style={servicesStyles}>
      <h2>Our Services</h2>
      <div style={serviceItemStyles}>
        <div style={serviceIconStyles}>📘</div>
        <p>Financial Education</p>
      </div>
      <div style={serviceItemStyles}>
        <div style={serviceIconStyles}>📈</div>
        <p>Investment Strategies</p>
      </div>
      <div style={serviceItemStyles}>
        <div style={serviceIconStyles}>🤖</div>
        <p>Robo Advisor</p>
      </div>
      <div style={serviceItemStyles}>
        <div style={serviceIconStyles}>🔢</div>
        <p>Finance Calculator</p>
      </div>
      <div style={serviceItemStyles}>
        <div style={serviceIconStyles}>📝</div>
        <p>Financial Literacy Quiz</p>
      </div>
    </section>
  );
};

export default Services;
