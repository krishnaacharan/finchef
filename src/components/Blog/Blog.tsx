import React from "react";
import { blogStyles, blogPostStyles } from "./BlogStyles";

const Blog: React.FC = () => {
  return (
    <section style={blogStyles}>
      <h2>Blog</h2>
      <div style={blogPostStyles}>
        <h3>Latest Market Trends</h3>
        <p>
          Stay updated with the latest financial tips, market trends, and
          success stories from our community.
        </p>
      </div>
      <div style={blogPostStyles}>
        <h3>Investment Tips</h3>
        <p>
          Discover expert investment strategies and tips to make your money work
          for you.
        </p>
      </div>
    </section>
  );
};

export default Blog;
