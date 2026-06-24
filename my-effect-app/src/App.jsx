import React, { useEffect, useState } from 'react'
import './App.css'
import ShowAll from './components/ShowAll'

const App = () => {

  let [count, setCount] = useState(0)

  let [change , setChange] = useState(0)

  const greet = () => {
    console.log("Hello from App greet....")
  }


    useEffect(greet , [change])

    //1. useEffect with no dependency array : act like a normal called function  .. // not recommended
    //2. useEffect with empty dependency array : only will excute at 1st render of component
    //3. useEffect with valued dependency array : will excute when that provided value is change or updates




  return (
    <div>
      <center>
        <h1>
          Welcome to my Effect
        </h1>

        <button onClick={() => setCount(count + 1)}>Increase</button>

        <h2>Count : {count}</h2>

        <button onClick={() => setChange(change + 1)}>Delete</button>
       
        <ShowAll />
      </center>
    </div>
  )
}

export default App
