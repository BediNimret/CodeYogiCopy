import React from "react";
import MainLayout from "./MainLayout";
import SideBar from "./SideBar";
import {BsDownload} from "react-icons/bs";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from "luxon";

function LectureTemplate(props) {
    
    const diff = DateTime.fromISO(props.end).diff(DateTime.fromISO(props.start)).toFormat("hh':'mm':'ss ");
  return(
    <ul className="w-full relative ">
      
       
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg  shadow-lg mb-5 pb-5 font-semibold" >
    <div className="flex flex-col  justify-between w-full pb-2 pr-2 pt-2 space-x-6  ">
       <div className=" pl-2 ml-2">
  <h3 className="font-medium text-gray-900 truncate">Lecture # {props.id}
  <span className="text-gray-500 pl-3">{DateTime.fromISO(props.date).toLocaleString(DateTime.DATE_FULL)}</span>
  
  </h3>
  <p className="mt-1 text-sm text-gray-500 truncate">Duration: {diff}</p>
  </div>
  <div className="markdown flex-shrink-0 inline-block mt-3  py-2 text-sm font-medium">
  <MDEditor.Markdown source={props.topics} className="pb-2 pr-2 pt-2 rounded-md" />
  </div>
    </div>
    <div className="flex flex-1 px-2 sm:px-8 justify-center items-center text-gray-600 ">
    <BsDownload/>
    <a href={props.recording_url} className="ml-1 sm:ml-3 ">Watch/Download Recording</a>
  </div> 
  
  </li>
  </ul>
    
  );
}

export default  LectureTemplate;
//{props.topics.map(li => <ListDisplay disc={disc} topic={li.title}> </ListDisplay>)}