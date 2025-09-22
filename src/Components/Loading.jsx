import React from "react";
import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <img src={loader} alt="Loading..." className="w-100 h-50 mb-6" />
      <h1 className="text-5xl text-white font-semibold">Loading...</h1>
    </div>
  );
};

export default Loading;