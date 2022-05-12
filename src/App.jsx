import React from "react";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import Login from "./Login";
import QuizPage from "./QuizPage";
import PersonalDetails from "./PersonalDetails";
import {  Routes, Route ,Navigate} from "react-router-dom";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetails from "./AssignmentDetails";
import StudentData from "./StudentData";
import AlertContext from "./AlertContext";
import Alerts from "./Alerts";
import {uniqueId} from "lodash";


function App() {
  let id = uniqueId();
 const [alerts,setAlert] = React.useState([]);

 const showAlert =React.useCallback( (message,type="success", timeout=4)  => {
  const alert ={message,type,id};
  setAlert([...alerts,alert]);
  timeout && setTimeout(() => {
    removeAlert(alert.id);
}, timeout* 1000);
 },[alert,id] );

 const removeAlert = React.useCallback((id) =>
 {
   setAlert((data) => {return data.filter(a => a.id !== id)});
  },[] );
 
  const alertData = React.useMemo( () =>{ return {alerts, showAlert,removeAlert}},[alerts]);
  return (
   
    <AlertContext.Provider value={alertData}>
     <Alerts/>
    <Routes>
      <Route path="/" element={<Navigate to="Assignments"/>} ></Route>
<Route path="/" element={<MainLayout />} >
    <Route path="Assignments" element={<AssignmentList />} />
    <Route path="Lectures" element={<LectureList />} />
    <Route path="PersonalData" element={<PersonalDetails />} />
    <Route path="Assignments/:AssignmentNumber/details" element={<AssignmentDetails />} />
    <Route path="StudentPage" element={<StudentData />} />
</Route>   
<Route path="Quiz" element={<QuizPage />} />
<Route path="Login" element={<Login />} />
<Route path="*" element={<NotFound />} />
</Routes>
     </AlertContext.Provider> 
      
      
  );
}

export default App;
