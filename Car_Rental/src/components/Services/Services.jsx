import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing eli",
    aosDelay: "0",
  },
  {
    name: "Best Price",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing eli",
    aosDelay: "600",
  },
  {
    name: "Best Price",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor, sit amet",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose US
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="card text-center group  text-white space-y-4 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary hover:text-black duration-300 rounded-lg"
            >
              <div className="grid place-items-center">{data.icon}</div>
              <h1>{data.name}</h1>
              <p className="">{data.description}</p>
              <a href={data.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
