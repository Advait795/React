import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Review from "./components/Review/Review";
import Social from "./components/Social/Social";
import Contact from "./components/COntact/Contact";
import Footer from "./components/Footer/Footer";

//AOS import
import AOS from "aos";
import "aos/dist/aos.css";
import CarList from "./components/CarList/CarList";

const App = () => {
  // Dark Mode Feature

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // INitializing AOS
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Review />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
