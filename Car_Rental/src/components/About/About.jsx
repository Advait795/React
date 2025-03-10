import React from "react";
import car1 from "../../assets/car1.png";

const About = () => {
  return (
    <div
      className="bg-slate-100 dark:bg-dark dark:text-white duration-300 sm:min-h-[600px]
    sm:grid sm:place-items-center"
    >
      <div className="container">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div data-aos="slide-right" data-aos-duration="1600">
            <img
              src={car1}
              alt=""
              className="sm:sclae-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif "
            >
              About Us
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              doloremque maxime atque quis ab ea
            </p>
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              et harum nostrum repellat, soluta de
            </p>
            <button data-aos="fade-up" className="button-outline">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
