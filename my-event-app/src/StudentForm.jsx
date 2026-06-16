import React, { useState } from 'react'

const StudentForm = () => {

    // const [roll , setRoll] = useState(0)
    // const [name , setName] = useState("")
    // const [marks , setMarks] = useState("")

    const [std, setStd] = useState({ stdroll: '', stdname: '', math: '', sci: '', eng: '' })
    const [total, setTotal] = useState(null)

    const handleChange = (e) => {

        let { name, value } = e.target;

        setStd({ ...std, [name]: value })


    }

    const handleSubmit = (e) => {

        e.preventDefault();   // prevents from reloading the page 

        console.log(std)

        const tt = Number(std.math) + Number(std.sci) + Number(std.eng);

        setTotal(tt)



    }

    const handleReset = () => {
        setStd({ stdroll: '', stdname: '', math: '', sci: '', eng: '' })

        setTotal(null)

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

            {
                total &&
                <div>
                    <h2>
                        ROll : {std.stdroll}
                    </h2>
                    <h2>
                        NAME : {std.stdname}
                    </h2>
                    <h2>
                        MATH : {std.math}
                    </h2>
                    <h2>
                        SCI : {std.sci}
                    </h2>
                    <h2>
                        ENG : {std.eng}
                    </h2>
                    <h2>
                        TOTAL : {total}
                    </h2>
                </div>
            }
        </div>
    )
}

export default StudentForm
