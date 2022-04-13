import React from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";
import axios from "axios";

function SubmitPage(props) {
   
  
  
  return(
    
    <div className="flex flex-1 px-2 pt-4 sm:px-8 justify-center items-center text-green-600 ">
    {props.submitStatus.length===0 && < div className="flex justify-center items-center">
    <AiOutlineCheckCircle className="text-2xl"/>
    <button className="ml-1 sm:ml-3" onClick={props.onClick}>Submit</button>
    </div>}

  
    {props.submitStatus.length!==0 && <div className="flex justify-between w-full items-center">
        <div className="flex">
    <AiOutlineCheckCircle className="text-2xl"/>
    <button className="ml-1 sm:ml-3 " onClick={props.onClick}>ReSubmit</button>
    </div>
    <span className="ml-1 sm:ml-3 text-gray-600 ">|</span>
    <div className="flex">
    <a href={props.submitStatus[0].submission_link} className="flex">
    <BsDownload className="text-2xl ml-2 text-blue-600"/>
    <span className="ml-1 sm:ml-3 text-blue-600">See Your Submittion</span>
    </a>
    
    </div>
    </div>
    }
  </div> 
    
  );
}

export default  SubmitPage;
