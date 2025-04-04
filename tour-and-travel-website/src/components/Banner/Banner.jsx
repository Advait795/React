import React from "react";
import TravelBag from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[500px] bg-gray-100">
      <div className="flex items-center justify-center min-h-[50px] py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 items-center">
            <div data>
              <img
                data-aos="flip-up"
                src={TravelBag}
                alt=""
                className="max-h-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]"
              />
            </div>
            {/* Text Content Section */}
            <div className="space-y-4">
              <h1 data-aos="fade up" className="text-3xl sm:text-4xl font-bold">
                Explore all corners of the world with us !
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm tracking-wide leading-8 text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati veritatis enim, doloremque totam cupiditate,
                reiciendis deserunt, dolor reprehenderit commodi quos saepe. De
              </p>
              <div data-aos="zoom in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6 ">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 p-4 shadow-sm rounded-full bg-violet-100 " />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 p-4 shadow-sm rounded-full bg-orange-100 " />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-4"></div>
                </div>
                <div className="space-y-6 ">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 p-4 shadow-sm rounded-full bg-green-100 " />
                    <p>Wi-Fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 p-4 shadow-sm rounded-full bg-yellow-100 " />
                    <p>Food</p>
                  </div>
                  <div className="flex items-center gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
