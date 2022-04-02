import React from "react";


function ListDisplay(props) {
    let name="list-disc"
  return(
    
      <ul>
      <h1 className="hidden">{!props.disc && (name="list-none")}</h1>    
          
          <li  className={name}>{props.topic}</li>
      </ul>
  
   );
}

export default  ListDisplay;
