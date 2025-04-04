import React from "react";

const Location = () => {
  return (
    <div>
      <div className="container pb-10">
        <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
          Location to Visit
        </h1>
        <div className="rounded-xl">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            width="100%"
            height="360"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
