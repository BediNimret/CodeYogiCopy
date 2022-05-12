import axios from "axios";



export const StudentInfo = () =>
{
    const data =axios.get(`https://randomuser.me/api/?results=6`);
    return data;
}
export const SelfInfo = () =>
{
 
return axios.get(`https://api.codeyogi.io/me/`,{withCredentials:true,});
}

export const AssignmentDetail = () =>
{
 
return axios.get(`https://api.codeyogi.io/batches/1/assignments/`,{withCredentials:true,});
}

export const LectureDeatils = () =>
{
 
return axios.get(`https://api.codeyogi.io/batches/1/sessions/`,{withCredentials:true,});
}