import React from "react";

import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsDownload} from "react-icons/bs";
import { useField } from "formik";

function InputBox({lable,extra,required,name,...rest}) {
  
  const[field,meta]=useField(name);
  const {error,touched}=meta;

  return(
    
        <dl className="sm:divide-y sm:divide-gray-200 border-t">
           <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
             <dt  className="text-sm font-medium text-gray-500">{lable}
            {required && <span className="text-red-500 text-lg ml-1">*</span>}
             <label htmlFor={name} className="text-red-600"> {extra}</label></dt>
             <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
           <input onChange={field.onChange} onBlur={field.onBlur} name ={name}className={`  appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  undefined bg-gray-50
          rounded-md `} value={field.value || ""} {...rest}/>
                </dd>
                {touched && error && <span className="text-red-500 text-lg ml-1">{error}</span>}
           </div>
        </dl>
        
     
  );
}

export default   InputBox;

            
