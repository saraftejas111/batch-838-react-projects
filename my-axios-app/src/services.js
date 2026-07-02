import axios from "axios";

export const fetchAllEmployees = () => axios.get(`http://localhost:3000/employees`) ; 

export const addEmployee = (emp) => axios.post(`http://localhost:3000/employees` , emp) ; 

export const deleteEmployee = (id) => axios.delete(`http://localhost:3000/employees/${id}`) ; 

export const updateEmployee = (id , emp) => axios.put(`http://localhost:3000/employees/${id}` , emp) ; 




