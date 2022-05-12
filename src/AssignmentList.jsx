import React from "react";
import AssignmentTemplate from "./AssignmentTemplate";
import {AssignmentDetail} from "./Api";

import axios, { Axios } from "axios";

function AssignmentList() {
  

  let [list,updateAssignment] =React.useState([]);
 
 React.useEffect(() => {
   const data=AssignmentDetail();
    data.then((response) =>{
        const value=response.data;
        updateAssignment(value);
     });
  },[]);

  return(
    
    <div className="relative md:pt-10 px-5 ">
      
      <h1 className="mb-5 text-xl font-semibold">Assignment List</h1>
      
      
     
    <div className="relative z-0 flex items-center flex-col m-5 justify-center px-4 py-4 mt-2 bg-white sm:px-6 lg:px-8">
    
    { list.map(li => <AssignmentTemplate  id={li.id} key={li.id} duedate={li.due_date} date={li.created_at} description={li.description}  title={li.title} submitStatus={li.submissions} > </AssignmentTemplate>)}
    </div>
   
   
    
    
  
  </div>
    
    
  );
}

export default AssignmentList;
// 