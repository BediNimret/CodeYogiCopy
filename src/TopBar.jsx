import React from "react";
import { Link} from "react-router-dom";
import {BiLogOut} from "react-icons/bi";
import {AiOutlineClockCircle} from "react-icons/ai";

function TopBar() {
  return ( 
  <div className=" w-full  flex items-stretch bg-gray-800 text-white px-2">
      <div className="flex items-center justify-between w-full py-1 border-b border-indigo-500 lg:border-none">
      <Link to="/Lectures" >
      <div className="flex items-center py-2">
      <h1  className="font-semibold ">CodeYogi</h1>
      <span className="mx-2 text-xl sm:block hidden">|</span>
      <h3 className="sm:block hidden">Welcome Student</h3>
      
      </div>
      </Link>
      <div className="flex space-x-4">
      <div className="flex items-center sm:px-2 sm:py-1 px-1 py-2 bg-blue-600 text-white justify-center undefined ">
          <AiOutlineClockCircle className="m-1 text-2xl"/><p className="ml-1">00:00</p>
      </div>
      <button className="flex items-center sm:px-2 sm:py-1 px-1 py-2 bg-blue-600 text-white justify-center text-base ">
     <span className="m-1 text-2xl"> <BiLogOut /> </span>  Logout </button>
     
      </div>
      
      </div>
  </div> );
}

export default  TopBar;
