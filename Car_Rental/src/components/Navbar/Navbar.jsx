import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: "4",
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setshowMenu] = useState(false);

  const togglemenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <nav className="shadow-md bg-white dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between  items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Rent_A_Car</h1>
          </div>
          <div className="hidden md:block ">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li className="py-4" key={data.id}>
                  <a
                    className="py-2 hover:border-b-2 hover:border-primary hover:text-primary transition-colors duration-400 text-lg fomt-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Dark Mode Icons */}
          <div>
            {theme == "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </div>
          {/* Mobile Hamburger Menu */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={togglemenu}
              size={30}
              className="cursor-pointer transition-all duration-300"
            />
          ) : (
            <HiMenuAlt3
              onClick={togglemenu}
              size={30}
              className="cursor-pointer transition-all duration-300"
            />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
