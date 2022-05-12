import React from "react";
import AssignmentDetailsList from "./AssignmentDetailsList";
import {useParams} from "react-router-dom";
import axios, { Axios } from "axios";
import {AssignmentDetail} from "./Api";

function AssignmentDetails() {
  let number =useParams();
  let n =+(number.AssignmentNumber);
  

  let [list,updateAssignment] =React.useState([]);
 
 React.useEffect( async () => {
   const promise= await AssignmentDetail();
   const value=promise.data;
   updateAssignment(value);
     
  },[]);

  const info=list.filter(t => n === t.id);
  
 
  
  
  return(
    
    <div className="flex  justify-center items-center mx-auto px-4 h-screen bg-gray-100 md:flex">
   <div className="bg-white px-4 pt-4 rounded-md ">
       <div className="  flex flex-col justify-between">
         
        
           <h3 className="text-lg font-medium leading-6 text-gray-900">Assignment Details</h3>
 
          {info.length===0 && <h1>This Assignment does not exixts </h1>
         }
         
         {info.length>0 && <AssignmentDetailsList duedate={info[0].due_date} id={info[0].id} submitStatus={info[0].submissions} description={info[0].description}  title={info[0].title}/>} 
         
        
            
       </div>

   </div> 
   </div>
  );
}

export default  AssignmentDetails;



