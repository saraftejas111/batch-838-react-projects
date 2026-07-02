import axios from "axios";

const BASE_URL = "http://localhost:8080"

export const fetchAllEmployees = () => axios.get(`${BASE_URL}/employees`) ; 

export const addEmployee = (emp) => axios.post(`${BASE_URL}/employees` , emp) ; 

export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/employees/${id}`) ; 

export const updateEmployee = (id , emp) => axios.put(`${BASE_URL}/employees/${id}` , emp) ; 




