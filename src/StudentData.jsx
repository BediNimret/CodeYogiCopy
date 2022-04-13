import axios, { Axios } from "axios";
import React, {useState ,  useEffect  } from "react";
import PlaCard from "./PlaCard";


function StudentData() {
let i=0;
 let [responseList,updateResponse] =React.useState([]);

 let image =["/Picture1.jpg","/Picture2.jpg","/Picture3.jpg","/Picture4.jpg","/Picture5.jpg","/Picture6.jpg"];
 
 useEffect(() => {
   const data=axios.get(`https://randomuser.me/api/?results=6`);
    data.then((response) =>{
        const value=response.data.results;
        updateResponse(value);
        responseList.push(value);
     });
  },[]);

  
 
  return ( 
    <div className="h-full p-3 max-w-screen-lg mx-auto">
    <h1 className="  text-xl font-bold sm:text-2xl"> Meet Our Team</h1>
    <p className=" ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolore dolorum rerum, quasi eum officia neque debitis quas aliquam nulla nam ducimus architecto molestiae et aut quae asperiores minima voluptatum?</p>
   
    <div className="flex flex-wrap justify-between bg-gray-100 ">
    {responseList.map(li =><PlaCard image={image[i++]}name={`${li.name.title} ${li.name.first} ${li.name.last}`} post={li.email} tlink="https://twitter.com/"  llink="https://in.linkedin.com/"></PlaCard>)}   
  
    </div>
  </div>
   );
}

export default  StudentData;

