import React, { useEffect, useState } from 'react'
import { deleteByID, showAllEmployees } from '../data'

const ShowAllEmployees = ({doRef , sendUpdateEmp}) => {

    let [employees, setEmployees] = useState([]); 

    let [refresh, setRefresh] = useState(true); 

    const loadAllEmployees = () => {
        setEmployees(showAllEmployees())
    }

    useEffect(loadAllEmployees, [refresh , doRef])

    const handleDelete = (id) => {

        deleteByID(id);

        setRefresh(!refresh)

    }



    return (
        <div>

            <h2>All Employees</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            role
                        </th>
                        <th>
                            salary
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button onClick={() =>handleDelete(e.id)}>Delete</button> {" "}
                                    <button onClick={()=> sendUpdateEmp(e)}>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllEmployees
