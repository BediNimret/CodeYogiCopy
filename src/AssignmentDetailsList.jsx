import React from "react";
import MDEditor from "@uiw/react-md-editor";
import SubmitPage from "./SubmitPage";
import PopUp from "./PopUp";

function AssignmentDetailsList(props) {
   const current = new Date();
   const date = `${current.getFullYear()}-${('0' +(current.getMonth()+1)).slice(-2)}-${('0' +(current.getMonth()+1)).slice(-2)}`;   
   const due= props.duedate.substring(0,10)
   const [show, updateshow]=React.useState(false);
  const toggle = () => 
  {updateshow(!show);
  }
    
  return(
   
            <div className="mt-5 border-t border-gray-200 w-full">
              { show && <PopUp onClick={toggle}/>}
              <dl className="sm:divide-y sm:divide-gray-200"  >
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
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><MDEditor.Markdown source={props.description} className="pb-2 pr-2 pt-2 rounded-md" /></dd>
                   </div>
                </dl>
                <div className="py-4 sm:py-5 sm:gap-4">
                  <div className="flex items-center">
                  <SubmitPage onClick={toggle} submitStatus={props.submitStatus} ></SubmitPage>
             </div>
             { (due.localeCompare(date)===-1) &&
             <p className="mt-4 text-red-500">The due date has passed for this assignment, any submission now will count as a late submission.</p>
             }
             </div>
             </div>
            
       
  );
}

export default   AssignmentDetailsList;
