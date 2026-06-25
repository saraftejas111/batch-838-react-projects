import React, { useEffect, useState } from 'react'
import './App.css'
import ShowAll from './components/ShowAll'
import EmployeeForm from './components/EmployeeForm'

const App = () => {

  let [count, setCount] = useState(0)

  let [add, setAdd] = useState(0)

  let [update, setUpdate] = useState(null)

  let [change, setChange] = useState(0)

  const greet = () => {
    console.log("Hello from App greet....")
  }


  useEffect(greet, [change])

  //1. useEffect with no dependency array : act like a normal called function  .. // not recommended
  //2. useEffect with empty dependency array : only will excute at 1st render of component
  //3. useEffect with valued dependency array : will excute when that provided value is change or updates


  const handleAdd = (e) => {
    setAdd(add + e)

    setUpdate(null)
  }
  const acceptUpdate = (e) => {
    setUpdate(e)
  }



  return (
    <div>
      <center>
        <h1>
          Welcome to my Effect
        </h1>

        <EmployeeForm added={handleAdd} updateThisEmp={update} />
        <ShowAll empAdded={add} updateEmp={acceptUpdate} />



        <br /><br />
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <h2>Count : {count}</h2>

        <button onClick={() => setChange(change + 1)}>Delete</button>
      </center>
    </div>
  )
}

export default App
