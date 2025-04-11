import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Gallery />
      <Courses />
    </div>
  );
};

export default Home;
