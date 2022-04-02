import React from "react";
import ListDisplay from "./ListDisplay";
import MainLayout from "./MainLayout";
import SideBar from "./SideBar";
import {BsDownload} from "react-icons/bs";

function LectureTemplate(props) {
    let disc=true;
  return(
    <ul className="w-full relative ">
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg  shadow-lg mb-5 pb-5 font-semibold">
    <div className="flex flex-col  justify-between w-full p-3 space-x-6  ">
       <div className="mb-2 sm:mb-0">
  <h3 className="font-medium text-gray-900 truncate">Lecture # {props.id}
  <span className="text-gray-500 pl-3">({props.date})</span>
  
  </h3>
  <p className="mt-1 text-sm text-gray-500 truncate">Duration: {props.duration}</p>
  </div>
  <div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium">
   
  

  {props.topics.map(li => <ListDisplay disc={disc} topic={li.title}> </ListDisplay>)}
  </div>
    </div>
    <div className="flex flex-1 px-2 sm:px-8 justify-center items-center text-gray-600 ">
    <BsDownload/>
    <span className="ml-1 sm:ml-3 ">Watch/Download Recording</span>
  </div> 
  
  </li>
  </ul>
    
  );
}

export default  LectureTemplate;