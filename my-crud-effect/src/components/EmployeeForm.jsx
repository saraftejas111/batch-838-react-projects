import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../data';

const EmployeeForm = ({ added, acceptUpdate }) => {

    let [form, setForm] = useState({ id: '', name: '', role: '', salary: '' })

    const handleChange = (e) => {

        let { name, value } = e.target;

        setForm({ ...form, [name]: value })

    }

    useEffect(() => {

        if (acceptUpdate) {
            setForm(acceptUpdate)
        }
    }, [acceptUpdate])

    const clearForm = () => {
        setForm({ id: '', name: '', role: '', salary: '' })
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        if (acceptUpdate) {
            updateEmployee(form)
        } else {
            addEmployee(form);
        }
       
        clearForm();
        added(1)

    }
    return (
        <div>

            <h2>{acceptUpdate ? 'Update Employee Form' : 'Add Employee Form'}</h2>
            <form onSubmit={handleSubmit}>

                id : <input type="text" name='id' value={form.id} onChange={handleChange} /><br /><br />
                name : <input type="text" name='name' value={form.name} onChange={handleChange} /><br /><br />
                role : <input type="text" name='role' value={form.role} onChange={handleChange} /><br /><br />
                salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} /><br /><br />

                <button>{acceptUpdate ? 'Update Employee' : 'Add Employee'}</button>
            </form>
        </div>
    )
}

export default EmployeeForm
