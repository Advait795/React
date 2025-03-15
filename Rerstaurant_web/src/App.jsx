import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Banner from "./Component/Banner/Banner";
import WhyChooseus from "./Component/WhyChoose/WhyChooseus";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <WhyChooseus />
    </div>
  );
};

export default App;
