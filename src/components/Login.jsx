import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


export const Login = ({ handleClose,handleOpen}) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" mt-24 flex justify-center items-cente h-[600px] w-[1600px]">
        <div className="bg-blue-500 text-white p- md:p-8 text-base h-[517px]">
          <h1 className="text-2xl font-medium">Login</h1>
          <div className="text-sm mt-4 leading-6 text-gray-300">
            Get access to your <br /> Orders, Wishlist and <br />
            Recommendations
          </div>
          <img className="mt-48" src="./login_img.png" alt="" />
        </div>
        <div className="  h-[516px] bg-white">
          <div className="ml-[300px]">
            <Button onClick={handleClose}>X</Button>
          </div>
          <div className="py-10 px-10">
            <TextField
              id="standard-basic"
              label="Enter Email/Mobile Number"
              variant="standard"
              className="w-full"
            />

            <br />
            <button
              className="bg-orange-500 shadow-md border-none text-white p-4 font-serif w-full mt-10 rounded"
              type="submit"
            >
              Request OTP
            </button>
            <Link to="/Registration">
          
              <div className="text-blue-700 font-semibold mt-52 text-center" onClick={handleOpen} >
               New to Flipkart? Create an account
               
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
