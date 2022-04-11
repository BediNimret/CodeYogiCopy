import React from "react";
import AssignmentTemplate from "./AssignmentTemplate";
import data from "./mockdata/assignmentData";
import PopUp from "./PopUp";
import axios, { Axios } from "axios";

function AssignmentList() {
  const [show, updateshow]=React.useState(false);
  const toggle = () => 
  {updateshow(!show);
  }

  let [list,updateAssignment] =React.useState([]);
 
 React.useEffect(() => {
   const data=axios.get(`https://api.codeyogi.io/batches/1/assignments/`,{withCredentials:true,});
    data.then((response) =>{
        const value=response.data;
        updateAssignment(value);
     });
  },[]);

  return(
    
    <div className="relative md:pt-10 px-5 ">
      
      <h1 className="mb-5 text-xl font-semibold">Assignment List</h1>
      
      
      <div className={show && "opacity-50"}>
    <div className="flex items-center flex-col m-5 justify-center px-4 py-4 mt-2 bg-white sm:px-6 lg:px-8">
    
    { list.map(li => <AssignmentTemplate onClick={toggle} id={li.id} key={li.id} duedate={li.due_date} date={li.created_at} description={li.description}  title={li.title} submitStatus={li.submissions} > </AssignmentTemplate>)}
    </div>
    </div>
    { show && <PopUp onClick={toggle}/>}
    
    
  
  </div>
    
    
  );
}

export default AssignmentList;
// 