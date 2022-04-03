import React from "react";
import { Link} from "react-router-dom";

function Icons(props) {
  const path=props.href.split("/");
  return (
    
    <Link to={props.href} className=" text-lg ">
    <button className=" flex justify-start items-center hover:bg-gray-700 rounded-md w-full text-gray-300 hover:text-white " 
    id={props.location === path[1] ? "active" : ""}>
    <props.icon className=" m-2 text-3xl" />
    <p>{props.text}</p>
    </button>
    </Link>
  );
}

export default Icons;
