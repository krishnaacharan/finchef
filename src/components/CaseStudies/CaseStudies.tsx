import React from "react";
import { caseStudiesStyles, caseStudyItemStyles } from "./CaseStudiesStyles";

const CaseStudies: React.FC = () => {
  return (
    <section style={caseStudiesStyles}>
      <h2>Case Studies</h2>
      <div style={caseStudyItemStyles}>
        <h3>Student Success Stories</h3>
        <p>
          Learn how students have applied financial knowledge from FincheF to
          improve their financial situations.
        </p>
      </div>
      <div style={caseStudyItemStyles}>
        <h3>Real-Life Applications</h3>
        <p>
          Explore detailed case studies on major financial topics and their
          real-world applications.
        </p>
      </div>
    </section>
  );
};

export default CaseStudies;
