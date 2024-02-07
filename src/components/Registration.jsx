import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
// import Modal from '@mui/material/Modal';
// import toast, { Toaster } from 'react-hot-toast';




export const Registration = () => {
  const[input,setInput]=useState(1)

  
    


  const navigate = useNavigate();
  // const notify = () => toast('Here is your toast.');

const HandleLogin =(e)=>{
  
  
    navigate("/");
    // notify()
    
    alert("login Successfully")

}

  return (
  
   
    <div className="flex justify-center items-center h-screen ">
    <div className=" mt-24 flex justify-center items-cente h-[600px] w-[1600px]">
      
      <div className="bg-blue-500 text-white p- md:p-8 text-base h-[517px]">
        <h1 className="text-2xl font-medium">Looks like you're <br/>new here!</h1>
        <div className="text-sm mt-4 leading-6 text-gray-300">
        Sign up with your mobile <br/> number to get started
        </div>
        <img className="mt-48" src="./login_img.png" alt="" />
      </div>
      <div className="  h-[516px] bg-white">
        <div className="ml-[300px]">
          <Button >X</Button>
        </div>
        <div className="py-10 px-10">
        {input===1 &&
          <TextField
            id="standard-basic"
            label="Enter Mobile Number"
            variant="standard"
            className="w-full"
          />
          }
          {input===2 &&
          <TextField
            id="standard-basic"
            label="Enter Email Address"
            variant="standard"
            className="w-full"
          />
          }

          <br />
          {input ===1 || input===2 ?<button
            className="bg-orange-500 shadow-md border-none text-white p-4 font-serif w-full mt-10 rounded"
            type="submit"
            onClick={()=>setInput(input ===2 ? HandleLogin : input+1)}
          >
          {input === 2 ? "SUBMIT":"CONTINUE"}
            
          </button>:null}
          {/* <Toaster/> */}
          <Link to="/Login">
            <div className="text-blue-700 font-semibold mt-52 text-center">
              Existing User? Login
            </div>
          </Link>
        </div>
      </div>
    
    </div>
  </div>
  

  );
};
