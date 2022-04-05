import React from "react";
import {  Link} from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";

function AssignmentTemplate(props) {
    const key= props.id;
    let url="../Assignments/"+key+"/Details";
    
  return(
    <ul className="w-full relative ">
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg  shadow-lg mb-5 pb-5 font-semibold" key={key}>
   <Link to= {url}>
    <div className="flex flex-col  justify-between w-full p-3 space-x-6  ">
       <div className="mb-2 sm:mb-0">
  <h3 className="font-medium text-gray-900 truncate p-2"># {props.id}
  <span className="text-gray-900 pl-3">{props.title}</span>
  <span className="text-gray-500 pl-3">({props.date})</span>
  
  </h3>
  <div className="flex justify-between pt-2">
  <p className="text-red-500 pl-3">Due Date: {props.duedate}</p>

  {props.submitStatus && <p className="text-red-500 pl-3">Not Submitted</p>}
  {!props.submitStatus && <p className="text-green-600 pl-3">Submitted</p>}
  </div>
  </div>
    </div>
    </Link>
    <div className="flex flex-1 px-2 pt-4 sm:px-8 justify-center items-center text-green-600 ">
    {props.submitStatus && < div className="flex justify-center items-center">
    <AiOutlineCheckCircle className="text-2xl"/>
    <span className="ml-1 sm:ml-3 ">Submit</span>
    </div>}

  
    {!props.submitStatus && <div className="flex justify-between w-full items-center">
        <div className="flex">
    <AiOutlineCheckCircle className="text-2xl"/>
    <span className="ml-1 sm:ml-3 ">ReSubmit</span>
    </div>
    <span className="ml-1 sm:ml-3 text-gray-600 ">|</span>
    <div className="flex">
    <BsDownload className="text-2xl ml-2 text-blue-600"/>
    <span className="ml-1 sm:ml-3 text-blue-600">See Your Submittion</span>
    </div>
    </div>
    }
  </div> 
  
  </li>
  </ul>
    
  );
}

export default  AssignmentTemplate;
