import React from "react";
import {Link} from "react-router-dom"

export const Cart = () => {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className=" mt-24 flex justify-center items-center bg-gray-100 h-[600px] w-[1600px]">
        <div className="h-[400px] w-[1200px] -mt-32 bg-white">
          <div className="items-center">
            <img
              className="h-40 ml-[490px] mt-[20px]"
              src="../cartbg.webp"
              alt=""
            />
            <div className="text-2xl text-center mt-10">
              Missing Cart items?
            </div>
            <p className="text-center text-xs mt-8">
              Login to see the items you added previously
            </p>
            <Link to="/Login">
            <button
              className="bg-orange-500 shadow-md border-none text-white p-3 w-40 font-serif rounded ml-[520px] mt-8"
              type="submit"
            >
              Log In
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
