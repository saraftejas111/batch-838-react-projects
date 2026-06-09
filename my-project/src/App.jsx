import './App.css'
import CounterApp from './CounterApp';
import MobileComp from './MobileComp';




function App() {

  let name = "Tejas";

  let isActive = false;

  const handeClick = () => {

    console.log('button is clicked')

    isActive = true;

    console.log(isActive)

  }

  return (
    <>
      <center>
        <h1>
          Hello from React... {name}
        </h1>

        <h2>
          Sum = {5 + 5}
        </h2>

        <h1>
          {isActive ? "User is Logged-in" : "User is Logged-out"}
        </h1>

        <button className='one' onClick={handeClick}>Click Me</button>

        <CounterApp/>
     
     <MobileComp/>

     
      </center>
    </>
  )
}

export default App


// root Component
// Javacript XML : we can write javascript with html code 