import React, { useState } from 'react'

const EnquiryRecieved = ({ enquiryList, deleteId }) => {

    const handleDelete = (id) => {

        console.log("handledelete in EQR ----> ", id)

         deleteId(id) ;
    }

    return (
        <div>

            <h2>Enquiry Table</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>qual</th>
                        <th>college</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>Actions</th>

                    </tr>
                </thead>


                <tbody>
                    {
                        enquiryList.map((eq) => (
                            <tr key={eq.id}>
                                <td>{eq.id}</td>
                                <td>{eq.name}</td>
                                <td>{eq.qual}</td>
                                <td>{eq.college}</td>
                                <td>{eq.email}</td>
                                <td>{eq.mobile}</td>
                                <td>{eq.address}</td>
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

export default EnquiryRecieved
