import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const Blogsdata = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in India",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequuntur, et vitae amet consequatur delectus quas soluta? Consequatur impedit, corporis labore ipsa saepe, aspernatur eaque ipsam unde harum repudiandae explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam, harum, repellendus minima officia fugit reiciendis illo tempora rerum error asperiores tenetur? Saepe vel unde perferendis officiis sunt soluta quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corporis reiciendis. Consequuntur ratione non dolores repellat, sed eaque exercitationem magni quisquam ab adipisci nulla vel facere excepturi hic tempore mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis placeat numquam optio fuga, suscipit asperiores veritatis? Temporibus eum ipsum nam recusandae dicta vero deleniti debitis obcaecati dignissimos odit. Tempore, ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur harum expedita sint, perspiciatis laborum atque esse commodi molestiae obcaecati, eos quisquam et aliquam eaque accusamus, quibusdam rem libero ratione voluptas.",
    author: "john Dove",
    date: "April,2022",
  },
  {
    id: 2,
    image: Img2,
    title: "The 10 best places to visit in India",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequuntur, et vitae amet consequatur delectus quas soluta? Consequatur impedit, corporis labore ipsa saepe, aspernatur eaque ipsam unde harum repudiandae explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam, harum, repellendus minima officia fugit reiciendis illo tempora rerum error asperiores tenetur? Saepe vel unde perferendis officiis sunt soluta quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corporis reiciendis. Consequuntur ratione non dolores repellat, sed eaque exercitationem magni quisquam ab adipisci nulla vel facere excepturi hic tempore mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis placeat numquam optio fuga, suscipit asperiores veritatis? Temporibus eum ipsum nam recusandae dicta vero deleniti debitis obcaecati dignissimos odit. Tempore, ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur harum expedita sint, perspiciatis laborum atque esse commodi molestiae obcaecati, eos quisquam et aliquam eaque accusamus, quibusdam rem libero ratione voluptas.",
    author: "john Dove",
    date: "April,2022",
  },
  {
    id: 3,
    image: Img3,
    title: "The 10 best places to visit in India",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequuntur, et vitae amet consequatur delectus quas soluta? Consequatur impedit, corporis labore ipsa saepe, aspernatur eaque ipsam unde harum repudiandae explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam, harum, repellendus minima officia fugit reiciendis illo tempora rerum error asperiores tenetur? Saepe vel unde perferendis officiis sunt soluta quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corporis reiciendis. Consequuntur ratione non dolores repellat, sed eaque exercitationem magni quisquam ab adipisci nulla vel facere excepturi hic tempore mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis placeat numquam optio fuga, suscipit asperiores veritatis? Temporibus eum ipsum nam recusandae dicta vero deleniti debitis obcaecati dignissimos odit. Tempore, ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur harum expedita sint, perspiciatis laborum atque esse commodi molestiae obcaecati, eos quisquam et aliquam eaque accusamus, quibusdam rem libero ratione voluptas.",
    author: "john Dove",
    date: "April,2022",
  },
];

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className="container">
        <h1 className="text-3xl my-8 border-l-8 border-primary/50 py-2 pl-2 font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Blogsdata.map((data) => (
            <BlogCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
