import React, { Component } from "react";
import Baslik from "../components/Baslik";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import resumeData from "../resumeData";
import Test from "../components/Test";

const HomePage = () => {
  return (
    <div className="App">
      <Baslik />
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Test />
      <Testimonials resumeData={resumeData} />
    </div>
  );
};

export default HomePage;
