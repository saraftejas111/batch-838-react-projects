import React, { useEffect, useState } from 'react'
import { deleteById, showAllEmployees } from '../services'

const ShowAll = ({empAdded , updateEmp}) => {

    const [allemployees, setAllemployees] = useState([])
    const [refresh , setRefresh] = useState(0)

    // useEffect(function , [])

    function loadEmployees() {

        setAllemployees(showAllEmployees())

    }

    useEffect(loadEmployees, [refresh , empAdded])

    const handleDelete = (id) => {
        deleteById(id);
        setRefresh(refresh+1)
        console.log("after delete : " , id , showAllEmployees())
    }

    const handleUpdate = (emp) => {

        updateEmp(emp) ; 
            
    }


    return (
        <div>
            <h2>Show All Table</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>salary</th>
                        <th>Actions</th>

                    </tr>
                </thead>


                <tbody>
                    {
                        allemployees.map((eq) => (
                            <tr key={eq.id}>
                                <td>{eq.id}</td>
                                <td>{eq.name}</td>
                                <td>{eq.salary}</td>
                                <td>
                                    <button onClick={() => handleDelete(eq.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate(eq)}>
                                        Update
                                    </button>
                                </td>


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAll
