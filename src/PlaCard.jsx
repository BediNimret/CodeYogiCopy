import React from "react";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa"; 

function PlaCard(data){
  return( 
     
  <div className=" rounded-md  flex flex-col justify-center items-center sm:justify-start sm:items-start w-72 space-y-2 m-2 ">
  <div className=" flex justify-center  ">
     <img src={data.image} className="rounded-md  h-full  "/>
</div>
<div className="flex flex-col  justify-start">
  <h1 className=" font-sans font-bold  text-l sm:text-xl">{data.name} <span className="block font-semibold text-blue-600">{data['post']}</span></h1>
<div className="flex  text-gray-400 text-xl space-x-6 ">
 <a href={data.tlink}><FaTwitter  /> </a>
 <a href={data.llink}><FaLinkedin/> </a>
  </div>
  </div>
</div>

);
}
export default PlaCard;