import React from "react";
import AssignmentTemplate from "./AssignmentTemplate";
import data from "./mockdata/assignmentData";


function AssignmentList() {
  return(
    
    <div className="relative md:pt-10 px-5 ">
      
      <h1 className="mb-5 text-xl font-semibold">Assignment List</h1>
     
      
     
    <div className="flex items-center flex-col m-5 justify-center px-4 py-4 mt-2 bg-white sm:px-6 lg:px-8">
    
   
    {data.map(li => <AssignmentTemplate id={li.id} duedate={li.duedate} date={li.date} description={li.description}  title={li.title} submitStatus={li.submitted}> </AssignmentTemplate>)}
     
  
  </div>
  </div>
    
    
  );
}

export default AssignmentList;
