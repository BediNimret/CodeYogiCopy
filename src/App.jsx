import React from "react";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";

import QuizPage from "./QuizPage";
import PersonalDetails from "./PersonalDetails";
import {  Routes, Route ,Navigate} from "react-router-dom";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetails from "./AssignmentDetails";
import StudentData from "./StudentData";


function App() {
  

  return (
   
    
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

<Route path="*" element={<NotFound />} />
</Routes>
      
      
      
  );
}

export default App;
