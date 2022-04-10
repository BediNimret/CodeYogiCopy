import React from 'react';
import {ImCross} from "react-icons/im";

function PopUp(props) {
  const[input,UpdateInput]=React.useState([]);
  
  const value= (event) =>
  {
    UpdateInput(event.target.value)
  }
  return (
    
    
    <div className="fixed sm:w-1/3 sm:top-1/3 sm:right-1/4 w-full p-1 h-fit space-y-5 bg-white border-gray-900 rounded-md  border-2 shadow-lg">
      <div className="absolute top-2 right-2 ">
      <ImCross  onClick={props.onClick} />
        </div>
      <div className=" flex flex-col justify-start p-2">
        <hr className='border-1 w-full border-slate-400 shadow-lg space-y-4'/> 
        <div className='flex space-x-2 items-center'>
    <h2 className=" text-start">Submission_Link</h2>
      <input type="text" className=' h-8 border-gray-400' onChange={value} value={input}/>
      </div>
      <hr className='border-1 w-full border-slate-400 shadow-lg'/> 
      <button onClick={!(input.length===0)? props.onClick:""} className="text-white bg-blue-600 hover:bg-blue-800 rounded-lg p-2 w-1/3 mt-3">Submit</button>
    </div>
   
    
      </div>);
}

export default PopUp;