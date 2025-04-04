import React from "react";
import Location from "../components/Location/Location.jsx";

const About = () => {
  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1
          className="my-8 border-l-8
        border-primary/50 py-2 pl-2 text-3xl font-bold"
        >
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          soluta odio omnis, sint enim accusamus sit similique iure praesentium
          tempora cum quidem repellat natus magni ex officiis! Inventore,
          exercitationem illum?
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          inventore molestiae veniam tenetur mollitia aut vero, delectus
          quibusdam harum, dolorum possimus cumque odio vel commodi sapiente
          consectetur doloribus, fugit perferendis nulla maiores quo! Veniam ea
          quos quaerat enim dolorem consectetur quo ipsa iusto aperiam cum quam,
          dignissimos perspiciatis deleniti voluptate.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
