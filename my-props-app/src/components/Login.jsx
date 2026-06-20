import React, { useState } from 'react'

const Login = () => {



    let [active, setActive] = useState(false)

    let [show , setShow] = useState(false)


    return (
        <div>

            <h2>{active ? "User is Active" : "User in in-Active"}</h2>

            <button onClick={() => setActive(!active)}>Change</button>

             <br /><br />

            <form>


                email : <input type="text" name='email'  required /> <br /><br />
                password : <input type={show ? "text" : "password"} name='password'required /> 
                
                {" "} <button type='button' onClick={() => setShow(!show) }>{show ? "hide password" : "show password"}</button>

                 <br /><br />


                <button type='submit'>Send Data</button>
            </form>
        </div>
    )
}

export default Login
