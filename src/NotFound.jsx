import React from "react";
import {Link} from "react-router-dom";
import {RiAlertLine} from "react-icons/ri";

function NotFound() {
  return (
    <div className="grow bg-gray-500 flex flex-col justify-center items-center h-screen space-y-8">
     <div className=" bg-gray-700 flex flex-col justify-center items-center h-fit p-16 space-y-12 rounded-2xl">
     <div className=" flex text-red-400 text-5xl items-center justify-center ">
        <RiAlertLine className=" mx-2 "></RiAlertLine> <h1 className="font-bold  text-center">404 Error</h1><RiAlertLine  className=" mx-2 ">
        </RiAlertLine>
        </div>
        <div className=" space-y-4">
            
        <h1 className="font-bold text-gray-300 text-4xl text-center">Whoops!</h1>
        <p className="font-bold text-gray-300 text-2xl text-center">It seems like we couldn't find<span className="block"> the page you were looking for</span> </p>
        </div>
       <button class="btn-grad"> <Link to="/Lectures" className="text-gray-300 px-2 py-2 text-lg ">Go Back to Home Page</Link>
       </button>
       </div>
        </div>
      
      
  );
}

export default NotFound;

