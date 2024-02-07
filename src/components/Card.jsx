import React from "react";
import data from "./db.json";
import { IoCartOutline } from "react-icons/io5";

export const Card = () => {
  return (
    <>
      <div className="  mt-10  grid grid-cols-5 gap-8 py-10 px-10  ">
        {data.map((datas) => (
          <>
            <div className=" rounded-2xl shadow-xl py-5 ">
              <img className="h-80 w-72 rounded-2xl " src={datas.img} alt="" />
              <div className="font-bold text-center mt-3">{`Model:- ${datas.model}`}</div>
              <div className="text-center mt-2 ">{`Brand:- ${datas.brand}`}</div>
              <div className=" text-center mt-2 font-bold">{`Price:- ${datas.price}`}</div>
              <button className="bg-[#FF9F00] py-3 px-5 rounded-sm text-center mt-5 ml-12 font-bold flex">
                <div className="mt-1">
                  <IoCartOutline />
                </div>
                ADD TO CART
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
