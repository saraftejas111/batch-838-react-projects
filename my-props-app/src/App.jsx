import React, { useState } from 'react'
import './App.css'
import Sum from './components/Sum'
import Multiply from './Multiply'
import ShowEmplyees from './components/ShowEmplyees'
import SendData from './components/SendData'
import Greet from './components/Greet'
import Aa from './components/Aa'
import Xx from './components/Xx'
import Yy from './components/Yy'
import EnquiryForm from './components/EnquiryForm'
import EnquiryRecieved from './components/EnquiryRecieved'
import Login from './components/Login'


const App = () => {

  let [num1 , setNum1] = useState(0)
  let [num2 , setNum2] = useState(0)

  let [emp , setEmp] = useState({id:'' , name :'' , salary : ''})

  let [jj , setJj] = useState("")

  const [data , setData ] = useState([])

  const recieveName = (msg) =>{
    console.log(msg)
  }

  const recieveFromY = (vv) => {
          setJj(vv)
  }

  const recieveData = (dt) =>{

    console.log(dt)
    setData([...data , dt])
  } 


  

const recieveDeleteId = (id) => {

  console.log("del id in App.jsx = ", id);

  const updatedList = data.filter((item) => item.id !== id);

  setData(updatedList);
}
          
  

  return (
    <div>
      <center>
        <h1>
          Welcome to my Props App
        </h1>

        <Login/>

        <EnquiryForm sendData={recieveData}/>

        <EnquiryRecieved enquiryList={data} deleteId={recieveDeleteId}/>


        {/* <Xx dd={jj}/>

        <Yy sendToApp={recieveFromY}/>

        <Greet/>

         <h2>
          num1 = <input type="text" onChange={(e)=>setNum1(Number (e.target.value))}/>
         </h2>
         <h2>
          num2 = <input type="text" onChange={(e)=>setNum2(Number (e.target.value))}/>
         </h2>

        

      ---------------------------------------------------------------------------------

         <Sum a={num1} b={num2}/>

         <Multiply x={num1} y={num2}/>

        <ShowEmplyees data={emp}/>

        <SendData sendName={recieveName}/>

        <Aa msg={"hello"}/> */}

      
      </center>
    </div>
  )
}

export default App

// parent to child data passing by props 
