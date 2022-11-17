import React from "react";
import Slideshow from "./Slideshow";
import Search from "./Search";
import Carousel from "./Carousel";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Slideshow />
      <Search />
    </div>
  );
};

export default Home;
