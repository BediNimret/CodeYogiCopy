import React from "react";

export const useFrom = (initialValue,validation) =>
{ 
    
    const [formData,updateFrom] = React.useState(initialValue);
    const [touched,updateTouched] = React.useState({});
    const [error,updateError] = React.useState("");

    const handleSubmit = (event) =>
     {
         event.preventDefault();
         console.log(formData);
     }
     

     const changeForm   = async (event) =>
     {
        updateFrom({...formData, [event.target.name]:event.target.value})
        if(event.target.value != '' )
        {
            // const isFormValid = await validation.(event.target.value)
            // console.log(isFormValid);
        }
        
     }
     const handleBlur = (event) =>
     {
        updateTouched({...touched, [event.target.name]:true})
           
     }

     
     
    return {formData,handleBlur,handleSubmit,changeForm,touched,error};
} 