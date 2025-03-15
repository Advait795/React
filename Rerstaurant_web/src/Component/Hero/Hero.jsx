import React from "react";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/herobg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "COVER",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div style={BgStyle} className="realtive z-[-1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section*/}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Fresh & Healthy Meal Plan
              <span className="font-cursive text-secondary text-7xl">
                {" "}
                Delivery{" "}
              </span>{" "}
              <br />
              in Miami
            </h1>{" "}
            <p className="lg:pr-64">
              Delicious Meals Delivered to Your Door From $132.95 per Week
            </p>
            {/* button section */}
            <PrimaryButton />
          </div>
          {/* image section*/}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              className="w-full sm:scale-125 sm:translate-y-16"
              src={HeroImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
