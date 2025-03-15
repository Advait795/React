import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white mt-20">
      <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
        {/* contact Section */}
        <div>
          {/* Heading Section */}
          <h1 className="text-yellow font-bold text-center py-10 text-3xl">
            Contact Us
          </h1>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                #92, 3rd Main, Virgo city, Post, <br /> Canterbury, CT1 3RS
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>
                info@Webify.net
                <br />
                hr@Webify.net
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhoneAlt className="text-5xl" />
              </div>
              <p>
                +44 07393122432
                <br />
                +01227 044022
              </p>
            </div>
          </div>
        </div>
        {/* bottom footer */}
        <div className="flex justify-between p-4">
          <p className="flex gap-2 items-center justify-start">
            <span>
              <FaCopyright />
            </span>
            2022 TCJ. All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
