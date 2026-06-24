import React, { useEffect, useState } from 'react'
import { deleteById, showAllEmployees } from '../services'

const ShowAll = () => {

    const [allemployees, setAllemployees] = useState([])
    const [refresh , setRefresh] = useState(0)

    // useEffect(function , [])

    function loadEmployees() {

        setAllemployees(showAllEmployees())

        console.log("loading 5000... employees ")
    }

    useEffect(loadEmployees, [refresh])

    const handleDelete = (id) => {
        deleteById(id);
        setRefresh(refresh+1)
        console.log("after delete : " , id , showAllEmployees())
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


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAll
