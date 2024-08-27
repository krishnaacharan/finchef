import React from "react";
import { resourcesStyles, resourceItemStyles } from "./ResourcesStyles";

const Resources: React.FC = () => {
  return (
    <section style={resourcesStyles}>
      <h2>Financial Resources</h2>
      <div style={resourceItemStyles}>
        <h3>Finance Elements</h3>
        <p>Hedge Funds, Mutual Funds, Stocks, Insurance, Bonds, and more...</p>
      </div>
      <div style={resourceItemStyles}>
        <h3>Financial Awareness</h3>
        <p>Personal Budgeting, Credit Management, Retirement Savings, etc.</p>
      </div>
      <div style={resourceItemStyles}>
        <h3>Finance Entities</h3>
        <p>Commercial Banks, Investment Firms, Central Banks, etc.</p>
      </div>
      <div style={resourceItemStyles}>
        <h3>Financial Strategies</h3>
        <p>Robo Advisors, Portfolio Management, Retirement Planning, etc.</p>
      </div>
    </section>
  );
};

export default Resources;
