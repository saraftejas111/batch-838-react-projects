import React, { useState } from 'react'

const StudentForm = () => {

    // const [roll , setRoll] = useState(0)
    // const [name , setName] = useState("")
    // const [marks , setMarks] = useState("")

    const [std, setStd] = useState({ stdroll: '', stdname: '', math: '', sci: '', eng: '', total: '' })
    const [total, setTotal] = useState(null)

    let [allstd, setAllstd] = useState([])

    const handleChange = (e) => {

        let { name, value } = e.target;

        setStd({ ...std, [name]: value })


    }

    const handleSubmit = (e) => {

        e.preventDefault();   // prevents from reloading the page 

        console.log(std)

        const tt = Number(std.math) + Number(std.sci) + Number(std.eng);

      //  const newStd = {...std , total : tt}

        setAllstd([...allstd , {...std , total : tt}])
       
        console.log(allstd)
    }

    const handleReset = () => {
        setStd({ stdroll: '', stdname: '', math: '', sci: '', eng: '' })

    }
    return (
        <div>

            <h2>Student Form</h2>

            <form onSubmit={handleSubmit}>

                Roll : <input type="text" name='stdroll' value={std.stdroll} onChange={handleChange} required /> <br /><br />
                Name : <input type="text" name='stdname' value={std.stdname} onChange={handleChange} required /> <br /><br />
                Math : <input type="text" name='math' value={std.math} onChange={handleChange} required /> <br /><br />
                Sci : <input type="text" name='sci' value={std.sci} onChange={handleChange} required /> <br /><br />
                Eng : <input type="text" name='eng' value={std.eng} onChange={handleChange} required /> <br /><br />

                <button type='submit'>Add Student</button> {"  "}
                <button type='button' onClick={handleReset} >Reset</button>

            </form>

            <br />

            <h2>All Students</h2>
            <div>

                <table border='2'>

                    <thead>
                        <tr>
                            <th>
                                Roll no
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Math
                            </th>
                            <th>
                                Science
                            </th>
                            <th>
                                English
                            </th>
                            <th>
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allstd.map((s) => (
                                
                                <tr key={s.stdroll}>

                                    <td>{s.stdroll}</td>
                                    <td>{s.stdname}</td>
                                    <td>{s.math}</td>
                                    <td>{s.sci}</td>
                                    <td>{s.eng}</td>
                                    <td>{s.total}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StudentForm
