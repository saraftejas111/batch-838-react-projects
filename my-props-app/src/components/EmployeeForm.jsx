import React from 'react'

const EmployeeForm = () => {
    return (
        <div>
            <form>
                id  : <input type="text" /> <br /><br />
                name  : <input type="text" /> <br /><br />
                salary  : <input type="text" /> <br /><br />

                <button>Add Employee</button>
            </form>
        </div>
    )
}

export default EmployeeForm
