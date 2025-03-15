import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Banner from "./Component/Banner/Banner";
import WhyChooseus from "./Component/WhyChoose/WhyChooseus";
import AboutUs from "./Component/AboutUs/AboutUs";
import Footer from "./Component/Footer/Footer";
import Popup from "./Component/Popup/Popup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar handlePopup={handlePopup} />
      <Hero />
      <Banner />
      <WhyChooseus />
      <AboutUs />
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
