import React from "react";
import data from "./mockdata/lectureData";
import LectureTemplate from "./LectureTemplate";



function LectureList() {
  return (
    
  <div className="relative md:pt-10 px-5 ">
    <h1 className="mb-5 text-xl font-semibold">Session List</h1>
    <div className="flex items-center flex-col m-5 justify-center px-4 py-4 mt-2 bg-white sm:px-6 lg:px-8">
    
   
      {data.map(li => <LectureTemplate id={li.id} date={li.date} duration={li.duration}  topics={li.topics}> </LectureTemplate>)}
     
  
  </div>
  </div>
  );
}

export default LectureList;
