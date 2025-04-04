import React from "react";
import mainVid from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import BannerImg from "../components/BannerImg/BannerImg";
import Poster from "../assets/cover-women.jpg";
import Blogs from "../pages/Blogs";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={mainVid} />
          </video>
          <Hero />
        </div>
        <Places />
        <BannerImg img={Poster} />
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
