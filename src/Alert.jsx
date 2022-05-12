import cn from "classnames";
import React from "react";

function Alert({alert,removeAlert}) { 
    let{message,type,id}=alert;
    
    let themeClass = cn({
    "border-green-800 text-green-800 bg-green-200" : type==="success",
    "border-orange-800 text-orange-800 bg-orange-200" : type==="warning",
    "border-red-800 text-red-800 bg-red-200" : type==="failed"
    });
  console.log(id + "id");
    
  return (
   
    <div className="w-full flex justify-center ">
    {!(message===undefined) && <div className={'flex flex-col border-2  m-1  '+ themeClass}>
    <button className={'flex justify-end m-1 font-bold'} onClick={() => removeAlert(id) }>X</button>
      <span className=" m-1"> {message} </span>  
    </div>}
      
    </div> 
      
  );
}

export default React.memo(Alert);
