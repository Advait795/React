import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonialdata = [
  {
    id: 1,
    name: "samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta quod ratione fuga maiores, ut odit nesciunt omnis, dignissimos ipsam odio, quibusdam distinctio numquam voluptatem. Voluptas, quibusdam? Aliquam, vel minus.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta quod ratione fuga maiores, ut odit nesciunt omnis, dignissimos ipsam odio, quibusdam distinctio numquam voluptatem. Voluptas, quibusdam? Aliquam, vel minus.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta quod ratione fuga maiores, ut odit nesciunt omnis, dignissimos ipsam odio, quibusdam distinctio numquam voluptatem. Voluptas, quibusdam? Aliquam, vel minus.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta quod ratione fuga maiores, ut odit nesciunt omnis, dignissimos ipsam odio, quibusdam distinctio numquam voluptatem. Voluptas, quibusdam? Aliquam, vel minus.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "samuel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta quod ratione fuga maiores, ut odit nesciunt omnis, dignissimos ipsam odio, quibusdam distinctio numquam voluptatem. Voluptas, quibusdam? Aliquam, vel minus.",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-20 mx-auto max-w-[400px]">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimoial
          </p>
          <h1 className="text-3xl font-bold">Testimoial</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            doloribus id asperiores ut qui, officiis aut est. Sunt, totam!
            Culpa?
          </p>
        </div>
        {/* Testimonial Section */}
        <Slider {...settings}>
          {Testimonialdata.map((data) => (
            <div key={data.id} className="my-6">
              <div className="flex flex-col items-center justify-center text-center gap-4 shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                <img
                  className="rounded-full block mx-auto"
                  src={data.img}
                  alt=""
                />
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="tex-sm text-gray-500">{data.text}</p>
                <p className="text-9xl text-black/20 font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
