import React from "react";
import { Formik, Form } from "formik";
import InputBox from "./InputBox";
import * as Yup from 'yup';
import {SelfInfo} from './Api';
import { DateTime } from "luxon";
import AlertContext from "./AlertContext";
import Alerts from "./Alerts";


function PersonalDetails() {
  
  const {showAlert} =React.useContext(AlertContext)
 
  
  const [initialValues,updatInitialValues] =React.useState({first_name:'',last_name:'',email:'',
  year_of_pass_out:'',institute_name:'',date_of_birth:'',work_device:'',
  phone_no:'',institute_roll_no:'',branch:''});

  const validationSchema = Yup.object().shape({
    phone_no: Yup.string().min(10,"Too Short").max(10,"Too Long")
      
  });
  
  const onSubmit = () => {
    showAlert("Please check the data you have typed","warning",0); 
     
  }
  
  
  React.useEffect(() => {
    const data=SelfInfo();
     data.then((response) =>{
         const value=response.data.data;
         updatInitialValues({...initialValues,
           first_name:value.first_name,
           last_name:value.last_name,
           email:value.email,
           year_of_pass_out:value.year_of_pass_out,
           institute_name:value.meta.institute_name,
           date_of_birth: DateTime.fromISO(value.date_of_birth).toLocaleString(DateTime.DATE_FULL),
           work_device:value.work_device,
           phone_no:value.phone_no,
           institute_roll_no:value.institute_roll_no,
           branch:value.branch
          })
      });
   },[]);
  
   
  
  return(
    
    <div className="bg-white p-4 my-8 mx-24 rounded-md ">
   <Alerts></Alerts>   
<Formik enableReinitialize={true} initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit} className="mt-5 border-b  w-full" >
  
   <Form>
        <h1 className="mb-5 text-xl font-semibold">Personal Data</h1>
        <InputBox   name="first_name" lable="First Name"  required></InputBox>
        <InputBox   name="last_name" lable="Last Name"  extra=" (Skip only if you don't have it in official documents)"></InputBox>
        <InputBox   name="email" lable="Email"  type="email" ></InputBox>
        <InputBox   name="institute_name" lable="Institute Name"  required></InputBox>
        <InputBox   name="institute_roll_no" lable="Institute roll no."  required></InputBox>
        <InputBox   name="date_of_birth" lable="Date of Birth"  required></InputBox>
        <InputBox  name="year_of_pass_out" lable="Year Of Passout" ></InputBox>
        <InputBox   name="work_device" lable="Device you are using to do your assignments"  required></InputBox>
        <InputBox    name="phone_no" lable="Phone Number" required></InputBox>
        <InputBox   name="branch" lable="Branch"   ></InputBox>
               <button type="submit" className=" flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4">
               Update
             </button>
            
             </Form>
             </Formik>
             <button className=" flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-pink-500 py-2 px-4"
             onClick={() =>{showAlert("Please check the data you have typed","success",0)}}>
              New Alert
             </button>
    </div>
    
  );
}

export default   PersonalDetails;

            
