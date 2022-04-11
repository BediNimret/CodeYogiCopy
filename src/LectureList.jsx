import React ,{useEffect} from "react";
import LectureTemplate from "./LectureTemplate";
import axios, { Axios } from "axios";


function LectureList() {
  let [list,updateLecture] =React.useState([]);
 
 useEffect(() => {
   const data=axios.get(`https://api.codeyogi.io/batches/1/sessions/`,{withCredentials:true,});
    data.then((response) =>{
        const value=response.data;
        updateLecture(value);
     });
  },[]);

  return (
    
    <div className="relative md:pt-10 px-5 ">
      
    <h1 className="mb-5 text-xl font-semibold">Lectures List</h1>
    
  <div className="flex items-center flex-col m-5 justify-center px-4 py-4 mt-2 bg-white sm:px-6 lg:px-8">
  
    {list.map(li => <LectureTemplate id={li.id} date={li.created_at} duration={li.updated_at} recording_url={li.recording_url} topics={li.topic}> </LectureTemplate>)}
   
  </div>
  </div>
  );
}

export default LectureList;
