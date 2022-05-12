import React from "react";
import SideBar from "./SideBar";
import {  Outlet} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";


function MainLayout() {
    
  return ( 
  <div className=" h-screen  relative flex justify-center items-stretch">
      
       <div className="fixed   right-16 top-8 ">
       <button className=" bg-white border-gray-500 border  rounded-full text-gray-500">
       <BiArrowBack className="text-2xl m-1" />
       </button>    
      
</div>
      <div className="w-48 overflow-clip">
       <SideBar/>
      </div>
      <div className=" h-fit p-5 bg-gray-50  w-4/5 overflow-clip">
         
         
          <Outlet/>
           
          </div>
          </div>
  
   );
}

export default MainLayout;
