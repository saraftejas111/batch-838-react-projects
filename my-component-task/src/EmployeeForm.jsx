import React, { useState } from 'react'

const EmployeeForm = () => {

    const [emp, setEmp] = useState({ empname: '', role: '', salary: '' })

    const handleName = (e) => {

        setEmp({...emp , empname : e.target.value}) // Spread Operator 
    }
    const handleRole = (e) => {

        setEmp({...emp , role : e.target.value}) // Spread Operator 
    }
    const handleSalary = (e) => {

        setEmp({...emp , salary : e.target.value}) // Spread Operator 
    }

    const handleSubmit = (e) => {

        e.preventDefault() ; 

        console.log("hadleSubmit invoked")
        console.log(emp)

        
    }
    return (
        <div>
            <h1> Employee Form</h1>

            <form onSubmit={handleSubmit}>
                enter empname <input type="text" onChange={handleName} required/> <br /><br />
                enter role <input type="text"  onChange={handleRole} required/> <br /><br />
                enter salary <input type="text"  onChange={handleSalary} required/> <br /><br />

                <button type='submit'>Add Employee</button>
            </form>
            <br /><br /><br /><br />
        </div>
    )
}

export default EmployeeForm
