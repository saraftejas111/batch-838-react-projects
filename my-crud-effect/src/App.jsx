import React, { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import ShowAllEmployees from './components/ShowAllEmployees'


const App = () => {

  let [ref , setRef] = useState(false)

  let [emp , setEmp] = useState(null)

  return (
    <div>
      
      <center>

          <h1>
            My Effect CRUD
          </h1>

            <EmployeeForm added={()=>{setRef(!ref) , setEmp(null)}} acceptUpdate={emp}/> <br />

            <ShowAllEmployees doRef={ref} sendUpdateEmp={(e)=>setEmp(e)}/>


            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis quae quasi corporis fugit, blanditiis praesentium mollitia accusantium perferendis officiis est debitis eaque error laudantium eos animi pariatur labore voluptatibus suscipit a odit beatae aliquam rem? Similique, enim nemo blanditiis nulla magnam fugiat a dicta placeat. Suscipit est aperiam sint? Consequatur nam dolorem, assumenda sapiente praesentium similique, autem accusantium ipsa delectus rem eaque tempora harum nisi fuga quas esse reprehenderit est velit enim aspernatur eum quasi. Quae maiores neque blanditiis eos maxime enim fugiat modi consectetur iusto molestias laborum provident debitis rerum deleniti, labore perspiciatis reiciendis porro at, repellendus similique!
            </p>

      </center>
    </div>
  )
}

export default App
