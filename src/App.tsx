import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ResourcesPage from "./pages/ResourcesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
