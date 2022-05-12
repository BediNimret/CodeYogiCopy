
import React from "react";
import {useFrom} from "./forms";
import InputBox from "./Logininputbox";
import * as Yup from 'yup';

 function Login() {
    
    const validation = Yup.object().shape({
        email: Yup.string().email("Enter Valid Email").required("required"),
         password: Yup.string().max(5,"To Short").required("required") 
      });

     const initialValues= {email:'',password:''}; 
    
    const {formData,handleBlur,handleSubmit,changeForm,touched,error}= useFrom(initialValues ,validation);
     
   

  return (
    
      
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          
         <h1>Login</h1>
            
            <form className="rounded-md shadow-sm space-y-5" onSubmit={handleSubmit}>
              
                <InputBox
                 lable="Email"
                 onChange={changeForm}
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  value={formData.email}
                  placeholder="Email address"
                  required
                />
              
              <div>
                
                <InputBox
                lable="Password"  
                  onChange={changeForm}
                  onBlur={handleBlur}
                  name="password"
                  value={formData.password}
                  type="password"
                  placeholder="Password"
                  
                  required

                />
              </div>
            

            
              

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default Login;