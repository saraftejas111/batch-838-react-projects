import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../services';

const EmployeeForm = ({ added, updateThisEmp }) => {

    let [form, setForm] = useState({ id: '', name: '', salary: '' })


    useEffect(() => {

        if (updateThisEmp) {
            console.log("eform : ", updateThisEmp)
            setForm(updateThisEmp)
        }
    }, [updateThisEmp])

    const handleChange = (e) => {

        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (updateThisEmp) {
            updateEmployee(form)

        } else {
            addEmployee(form);
        }

        setForm({ id: '', name: '', salary: '' })

        added(1)

    }
    return (
        <div>
            <h2>{updateThisEmp ? "Update Employee Form" : "Add Employee Form"}</h2>
            <form onSubmit={handleSubmit}>
                id : <input type="text" name='id' value={form.id} onChange={handleChange} /> <br /><br />
                name : <input type="text" name='name' value={form.name} onChange={handleChange} /> <br /><br />
                salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} /> <br /><br />

                <button type='submit'>{updateThisEmp ? "Update Employee" : "Add Employee"}</button>
            </form>
        </div>
    )
}

export default EmployeeForm
