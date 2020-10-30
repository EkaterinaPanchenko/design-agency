import React from "react";
import Header from "modules/header/Header";
import About from "modules/about/About";
import Progress from "modules/progress/Progress";
import Aboutme from "modules/about-me/Aboutme";
import Project from "modules/project/Project";
import Footer from "modules/footer/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Progress />
      <Aboutme />
      <Project />
      <Footer />
    </>
  );
}

export default AboutPage;
