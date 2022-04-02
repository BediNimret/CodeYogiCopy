import React from "react";

import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";

function AssignmentDetailsList(props) {
    
  return(
   
            <div className="mt-5 border-t border-gray-200 w-full">
                <dl className="sm:divide-y sm:divide-gray-200">
                   <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Title</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.title}</dd>
                   </div>
                   <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Due Date</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.duedate}</dd>
                   </div>
                   <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Description</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.description}</dd>
                   </div>
                </dl>
                <div className="py-4 sm:py-5 sm:gap-4">
                  <div className="flex items-center">
               <button className=" flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4">
               <span className=" inset-y-0 left-0 flex items-center pl-3">Submit</span>
             </button>
             </div>
             <p className="mt-4 text-red-500">The due date has passed for this assignment, any submission now will count as a late submission.</p>
             </div>
             </div>
            
       
  );
}

export default   AssignmentDetailsList;
