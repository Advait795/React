import React from "react";
import pattern from "../../assets/website/pattern.jpeg";
import PlaystoreImg from "../../assets/website/play_store.png";
import ApplestoerImg from "../../assets/website/app_store.png";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const Social = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-12">
      <div className="container">
        <div
          className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
          style={bannerImg}
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                data-aos="fade up"
                className="text-3xl font-semibold text-center sm:text-4xl font-serif"
              >
                Get Started With Our App
              </h1>
              <p data-aos="fade up" className="text-center sm:px-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                fugiat!
              </p>
              <div
                data-aos="fade up"
                className="flex flex-wrap justify-center items-center gap-4"
              >
                <a href="">
                  <img
                    src={PlaystoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="">
                  <img
                    src={ApplestoerImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
