import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import EmployeeForm from './pages/EmployeeForm'
import ShowEmployee from './pages/ShowEmployee'


const App = () => {

  let [employees, setEmployees] = useState([])

 let [emp, setEmp] = useState(null)

  let [refresh, setRefresh] = useState(0)

  




  return (
    <div>
      <center>

        <h1>My Axios App</h1>

        <Navbar />

        <EmployeeForm setRef={(e)=>{setRefresh(refresh+e) , setEmp(null)}} acceptEmp={emp} />

       <ShowEmployee reload={refresh} sendEmp={(e)=>setEmp(e)}/>

      </center>
    </div>
  )
}

export default App


// reusbale piece of UI
