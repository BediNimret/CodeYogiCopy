import React from "react";
import SideBar from "./SideBar";
import {  Outlet} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";


function MainLayout() {
    
  return ( 
  <div className=" h-screen  flex items-stretch">
      
       <div className="sticky   right-4 top-4 ">
       <button className=" bg-white border-gray-500 border  rounded-full text-gray-500">
       <BiArrowBack className="text-2xl m-1" />
       </button>    
      
</div>
      <div className="w-48 ">
      <SideBar/>
      </div>
      <div className="overflow-visible  h-fit p-5 bg-gray-50 grow ">
         
         
          <Outlet/>
          
          </div>
          </div>
  
   );
}

export default MainLayout;
