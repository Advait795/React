import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa6";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contacts",
    link: "/#",
  },
];

const dropdownLinks = [
  {
    name: "Vegetables",
    link: "/#",
  },
  {
    name: "Fruits",
    link: "/#",
  },
  {
    name: "Grains",
    link: "/#",
  },
];

const Navbar = ({ handlePopup }) => {
  return (
    <div className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* logo secction */}
        <div className="font-bold text-3xl">LOGO</div>
        {/* Navlinks secction */}
        <div>
          <ul className="flex items-center gap-10">
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a
                  className="inline-block hover:text-primary text-xl font-semibold"
                  href={data.link}
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* category Dropdown */}
            <li className="cursor-pointer group relative">
              <a
                href="/#"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                <div className="flex items-center gap-[2px] py-2">
                  Categories
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </div>
              </a>

              {/* Dropdown section */}
              <div className="hidden group-hover:block absolute z-10 bg-white w-[200px] shadow-md p-1">
                <ul>
                  {dropdownLinks.map((data) => (
                    <li
                      key={data.name}
                      className="p-2 text-xl w-full rounded-md hover:bg-primary/20"
                    >
                      <a href={data.link}>{data.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Login Button */}
            <li>
              <button
                onClick={handlePopup}
                className="flex justify-center items-center gap-2 flex-wrap bg-secondary h-[40px] px-5 py-2 text-xl font-semibold text-white hover:scale-105 duration-300"
              >
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
