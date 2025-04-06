import React from "react";
import PlacesCard from "./PlacesCard";
import img1 from "../../assets/places/boat.jpg";
import img2 from "../../assets/places/tajmahal.jpg";
import img3 from "../../assets/places/water.jpg";
import img4 from "../../assets/places/place4.jpg";
import img5 from "../../assets/places/place5.jpg";
import img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: img1,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: img2,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 200,
    type: "Cultural Relax",
  },
  {
    img: img3,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 300,
    type: "Cultural Relax",
  },
  {
    img: img4,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 400,
    type: "Cultural Relax",
  },
  {
    img: img5,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 500,
    type: "Cultural Relax",
  },
  {
    img: img6,
    title: "Boat tour",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet erunt molestias repellat illum ex!",
    price: 700,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10 ">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((data, index) => (
            <PlacesCard
              key={index}
              data={data}
              handleOrderPopup={handleOrderPopup}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
