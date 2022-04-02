import React from "react";
import Icons from "./Icons";
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";
import {BiLogOut} from "react-icons/bi";


function SideBar() {
  return (
  
     <div className="fixed top-0 bg-gray-800 left-0 ">
      <div className="flex justify-between h-screen flex-col p-4">
        
          <div>
            <h1 className="text-3xl font-extrabold text-white  ">
              CODEYOGI
            </h1>
          
          <div className="flex flex-col  pt-8">
  
            <Icons href="/Quiz" icon={MdOutlineQuiz} text="Quiz"/>
            <Icons href="/Lectures" icon={GiTeacher} text="Lectures"/>
            <Icons href="/Assignments" icon={MdOutlineAssignment} text="Assignments"/> 
            </div>
            </div>
            <div className="flex flex-col ">
              <Icons href="/PersonalData" icon={CgProfile} text="Profile"/>
              <Icons href="/Lectures"  icon={BiLogOut} text="Logout"/> 
             </div>
            </div>
            </div>
           
           
           
          
        
     
  );
}

export default SideBar;
