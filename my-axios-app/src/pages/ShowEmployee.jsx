import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteEmployee, fetchAllEmployees } from '../services'


const ShowEmployee = ({ reload , sendEmp }) => {

    let [employees, setEmployees] = useState([])

    const loadEmployees = () => {
        // fetch('http://localhost:3000/employees')
        //   .then((res) => {
        //     // console.log("result = " , res)
        //     // console.log("Data " , res.json())
        //     res.json()
        //       .then((dt) => {
        //         console.log("data = ", dt)
        //         setEmployees(dt);
        //       })
        //       .catch((err) => {
        //         console.log("error in json = ", err)
        //       })
        //   })
        //   .catch((err) => {
        //     console.log("error = ", err)
        //   })

        // axios.get('http://localhost:3000/employees')
        //     .then((res) => {
        //         setEmployees(res.data);
        //     })
        //     .catch((err) => {
        //         console.log("error = ", err)
        //     })

        fetchAllEmployees().then((res)=> {
            setEmployees(res.data)
            console.log("success = " , res.data)
        }).catch((err)=>{
            console.log("error = " , err)
        })

    }

    useEffect(loadEmployees, [reload])

    const handleDelete = async (id) => {

        let res = await deleteEmployee(id) ; 

        console.log(res); 

        loadEmployees();
    }

    // const handleUpdate = (emp)=>{
    //     sendEmp(emp)
    // }

    return (
        <div>

            <h2>All Employees</h2>

            <table border='2'>
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Emp NAME</th>
                        <th>Emp ROLE</th>
                        <th>Emp SALARY</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((e) => (
                            <tr key={e.id}>
                                <td>{e.empId}</td>
                                <td>{e.empName}</td>
                                <td>{e.empRole}</td>
                                <td>{e.empSalary}</td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => sendEmp(e)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> <br />
        </div>
    )
}

export default ShowEmployee
