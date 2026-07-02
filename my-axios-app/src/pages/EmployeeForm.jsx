import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../services';

const EmployeeForm = ({ setRef, acceptEmp }) => {

    let [form, setForm] = useState({ empId: '', empName: '', empRole: '', empSalary: '' })

    const handleChange = (e) => {

        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    useEffect(() => {

        if (acceptEmp) {
            setForm(acceptEmp)
            console.log(acceptEmp)
        }
    }, [acceptEmp])

    const handleSubmit = async (e) => {
        e.preventDefault();



        if (acceptEmp) {
           let update = updateEmployee(acceptEmp.id , form)
           console.log("after update = " , update)
        } else {
         
            let add = await addEmployee(form); 

            console.log("after add : " , add)
        }



        setRef(1);

        setForm({ empId: '', empName: '', empRole: '', empSalary: '' })

    }
    return (
        <div>
            <h2>{acceptEmp ? "Update Employee Form" : "Add Employee Form"}</h2>
            <form onSubmit={handleSubmit}>
                Emp ID <input type="text" name='empId' value={form.empId} onChange={handleChange} required /> <br /><br />
                Emp NAME <input type="text" name='empName' value={form.empName} onChange={handleChange} required /> <br /><br />
                Emp ROLE <input type="text" name='empRole' value={form.empRole} onChange={handleChange} required /> <br /><br />
                Emp SALARY <input type="text" name='empSalary' value={form.empSalary} onChange={handleChange} required /> <br /><br />

                <button type='submit'>{acceptEmp ? "Update Employee" : "Add Employee"}</button>
            </form>
        </div>
    )
}

export default EmployeeForm
