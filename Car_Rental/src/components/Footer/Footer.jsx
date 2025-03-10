import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <div className="container bg-gray-100 dark:bg-dark rounded-t-3xl ">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias susc6ipit molestiae eos quam, accusamus tempore sequi!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Canterbury, Kent</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+44 07393122043</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Navlinks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {/* first coloumn */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify  mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <div
                      key={data.title}
                      className="hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            {/* Second coloumn */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify  mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <div
                      key={data.title}
                      className="hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            {/* Third coloumn */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify  mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <div
                      key={data.title}
                      className="hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
