import React from "react";
import AssignmentDetailsList from "./AssignmentDetailsList";
import data from "./mockdata/assignmentData"; 
import {useParams} from "react-router-dom";
function AssignmentDetails() {
  let number =useParams();
  
  let n =+(number.AssignmentNumber);

  
  const info=data.filter(t => n === t.id);

  console.log(!info);
  
  
  return(
    
    <div className="flex  justify-center items-center mx-auto px-4 h-screen bg-gray-100 md:flex">
   <div className="bg-white p-4 rounded-md ">
       <div className="  flex flex-col justify-between">
         
        
           <h3 className="text-lg font-medium leading-6 text-gray-900">Assignment Details</h3>
 
          {info.length===0 && <h1>This Assignment does not exixts </h1>
         }
         
         {info.length>0 && <AssignmentDetailsList duedate={info[0].duedate}  description={info[0].description}  title={info[0].title}/>} 
         
        
            
       </div>

   </div> 
   </div>
  );
}

export default  AssignmentDetails;
