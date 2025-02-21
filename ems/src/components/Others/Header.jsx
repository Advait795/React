import React, { useState } from "react";

const Header = (props) => {
  // const [userName, setuserName] = useState("");

  // if (!data) {
  //   setuserName("Admin");
  // } else {
  //   setuserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">userName...</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-lg border-none "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
