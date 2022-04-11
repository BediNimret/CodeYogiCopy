import React from "react";
import {  Link} from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";
import SubmitPage from "./SubmitPage";

function AssignmentTemplate(props) {
    const key= props.id;
    let url="../Assignments/"+key+"/details";
    
   const current = new Date();
   const date = `${current.getFullYear()}-${('0' +(current.getMonth()+1)).slice(-2)}-${('0' +(current.getMonth()+1)).slice(-2)}`;   
   const due= props.duedate.substring(0,10)
   
 
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
 {(due.localeCompare(date)===1 || (due.localeCompare(date)===0)) && <p className="text-gray-500 pl-3">Due Date: {props.duedate}</p>}
 {(due.localeCompare(date)===-1)  && <p className="text-red-500 pl-3">Due Date: {props.duedate}<span className="block text-sm">(Submission will count as late now)</span></p>}
  {props.submitStatus.length===0 && <p className="text-red-500 pl-3">Not Submitted</p>}
  {props.submitStatus.length!==0 && <p className="text-green-600 pl-3">Submitted</p>}
  </div>
  
  </div>
    </div>
    </Link>
    
<SubmitPage onClick={props.onClick} submitStatus={props.submitStatus} ></SubmitPage>
  </li>
  

  </ul>
    
  );
}

export default  AssignmentTemplate;
