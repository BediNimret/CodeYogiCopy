import React from "react";
import data from "./mockdata/StudentData";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";
import InputBox from "./InputBox";
 

function PersonalDetails() {
    
  return(
    <div className="bg-white p-4 my-8 mx-24 rounded-md ">

    <div className="mt-5 border-b  w-full">
        <h1 className="mb-5 text-xl font-semibold">Personal Data</h1>
        <InputBox value={data[0].FirstName} lable="First Name" important={true}></InputBox>
        <InputBox value={data[0].LastName} lable="Last Name" important={false} extra=" (Skip only if you don't have it in official documents)"></InputBox>
        <InputBox value={data[0].email} lable="Email" important={false}></InputBox>
        <InputBox value={data[0].college} lable="Institute Name" important={true}></InputBox>
        <InputBox value={data[0].roll_no} lable="Institute roll no." important={true}></InputBox>
        <InputBox value={data[0].dob} lable="Date of Birth" important={true}></InputBox>
        <InputBox value={data[0].yop} lable="Year Of Passout" important={false}></InputBox>
        <InputBox value={data[0].device} lable="Device you are using to do your assignments" important={true}></InputBox>
        <InputBox value={data[0].number} lable="Phone Number" important={true}></InputBox>
        <InputBox value={data[0].branch} lable="Branch" important={false}></InputBox>
        
    </div>
    <div className="flex items-center">
               <button className=" flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4">
               <span className=" inset-y-0 left-0 flex items-center pl-3">Update</span>
             </button>
             </div>
    </div>
  );
}

export default   PersonalDetails;

            
