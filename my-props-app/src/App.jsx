import React, { useState } from 'react'
import './App.css'
import Sum from './components/Sum'
import Multiply from './Multiply'
import ShowEmplyees from './components/ShowEmplyees'


const App = () => {

  let [num1 , setNum1] = useState(0)
  let [num2 , setNum2] = useState(0)

  let [emp , setEmp] = useState({id:'' , name :'' , salary : ''})

  return (
    <div>
      <center>
        <h1>
          Welcome to my Props App
        </h1>

         <h2>
          num1 = <input type="text" onChange={(e)=>setNum1(Number (e.target.value))}/>
         </h2>
         <h2>
          num2 = <input type="text" onChange={(e)=>setNum2(Number (e.target.value))}/>
         </h2>

         <form>
          id  : <input type="text" /> <br /><br />
          name  : <input type="text" /> <br /><br />
          salary  : <input type="text" /> <br /><br />

          <button>Add Employee</button>
         </form>

      ---------------------------------------------------------------------------------

         <Sum a={num1} b={num2}/>

         <Multiply x={num1} y={num2}/>

        <ShowEmplyees data={emp}/>
      </center>
    </div>
  )
}

export default App

// parent to child data passing by props 
