import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import OurRooms from "./OurRooms";
import Services from "./Services";

function Home() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <OurRooms />
        <Services />
        <Gallery />
        <ContactUs />
    </>
  );
}

export default Home;
