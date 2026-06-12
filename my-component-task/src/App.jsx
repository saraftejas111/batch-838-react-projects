
import { useState } from 'react'
import './App.css'
import SocialMediaPost from './SocialMediaPost'
import EmployeeForm from './EmployeeForm';

function App() {

  const [tiger , setTiger] = useState('');

const handleName = (e) => {

 // console.log('e = ' , e)
  // console.log('e.target = ' , e.target)
  //  console.log('e.target.name = ' , e.target.name)
  console.log(e.target.value)
  setTiger(e.target.value)

}

  return (
    <>
      <center>

        Enter your name : <input type="text" name='username' onChange={handleName} />

        <h1>Welcome to My Component App...</h1>

        <EmployeeForm/>
{/* 
        <h1>{tiger}</h1>

        <h2>Events : onClick , onChange , onSubmit</h2> */}
{/* 
        <h3>onClick : used with button tag to executes a function on button clicked</h3>
        <h3>onChange : used with input tag to executes a function[e] on value change..</h3>
        <h3>onSubmit : used with form tag to executes a function on form submits</h3>
 */}

        <SocialMediaPost />

      </center>
    </>
  )
}

export default App
