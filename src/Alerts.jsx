import React from "react";
import AlertContext from "./AlertContext";
import Alert from "./Alert";

function Alerts() {
  
    const {alerts,removeAlert} = React.useContext(AlertContext);
    
    
  
    
  return (
   <div className="fixed top-2 w-full left-20 z-10 ">
    {alerts.map(li => <Alert key={li.id} alert={li} removeAlert={removeAlert} ></Alert>)}
    </div> 
   
      
  );
}

export default React.memo(Alerts);
