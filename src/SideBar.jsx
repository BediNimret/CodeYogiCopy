import React from "react";
import Icons from "./Icons";
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";
import {BiLogOut} from "react-icons/bi";
import { useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const path=location.pathname.split("/");
  return (
  
     <div className="fixed top-0 bg-gray-800 left-0 ">
      <div className="flex justify-between h-screen flex-col p-4">
        
          <div>
            <h1 className="text-3xl font-extrabold text-white  ">
              CODEYOGI
            </h1>
          
          <div className="flex flex-col  pt-8">
  
          <Icons href="/Quiz" icon={MdOutlineQuiz} text="Quiz" location={path[1]}/>
            <Icons href="/Lectures" icon={GiTeacher} text="Lectures" location={path[1]}/>
            <Icons href="/Assignments" icon={MdOutlineAssignment} text="Assignments" location={path[1]}/> 
            </div>
            </div>
            <div className="flex flex-col ">
            <Icons href="/PersonalData" icon={CgProfile} text="Profile" location={path[1]}/>
              <Icons href="/*"  icon={BiLogOut} text="Logout" location={path[1]}/> 
             </div>
            </div>
            </div>
           
           
           
          
        
     
  );
}

export default SideBar;
