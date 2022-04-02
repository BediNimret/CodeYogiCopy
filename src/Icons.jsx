import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

function Icons(props) {
  return (
    
            <div className=" flex   ">
              <props.icon className="text-gray-300 m-2 text-3xl" />
              <Link to={props.href} className="text-gray-300 px-2 py-2 text-lg ">{props.text}</Link>
            </div>
  );
}

export default Icons;
