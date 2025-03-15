import React from "react";
import bgImg from "../../assets/polygon.png";
import vector from "../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa6";

const bg = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const AboutUs = () => {
  return (
    <>
      <div style={bg} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 className="text-white tracking-wider font-semibold text-center text-4xl pt-20">
            About Us
          </h1>

          {/* Card section */}
          <div className="bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            at totam rem est, incidunt aliquid numquam. Aliquid assumenda
            aperiam harum at iste amet, hic deleniti consequuntur repudiandae
            quaerat nam vel. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ad qui, harum suscipit recusandae autem rerum culpa illum
            fugiat quis? Sequi assumenda tempore aliquid quia doloremque
            facilis, quisquam nemo labore aperiam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat cumque aliquid minima fugit
            vero assumenda nesciunt est minus veritatis facere, eveniet expedita
            suscipit inventore id pariatur vel. Voluptas, accusantium error.
            <div className="flex pt-10 justify-center">
              {" "}
              <button>
                <a
                  href="/#"
                  className="flex justify-center items-center gap-2 flex-wrap bg-primary h-[40px] px-5 py-2 text-xl font-semibold text-white hover:scale-105 duration-300"
                >
                  <FaUser />
                  My Account
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Wave Section */}
        <div className="absolute top-0 right-0 w-full">
          <img src={vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
