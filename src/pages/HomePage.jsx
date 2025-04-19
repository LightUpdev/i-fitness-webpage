import React from "react";
import Navbar from "../components/homePage_components/Navbar";
import HeroCard from "../components/homePage_components/HeroCard";
import Experiences from "../components/homePage_components/Experiences";
import Carousel from "../components/homePage_components/Carousel";
import Event from "../components/homePage_components/Event";
import Footer from "../components/homePage_components/Footer";

const HomePage = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <Navbar toggleMenu={toggleMenu} showMenu={showMenu} />
      <HeroCard />
      <Experiences />
      <Carousel />
      <Event />
      <Footer />
    </>
  );
};

export default HomePage;
