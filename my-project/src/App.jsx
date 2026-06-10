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

        <CounterApp />

        <br />
        <br />
        <br />

     <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore eius veritatis, sequi, iste accusamus, cumque perspiciatis odit obcaecati laudantium culpa? Error fugit libero necessitatibus amet iste, dignissimos culpa qui odit eaque magni beatae exercitationem reiciendis, impedit nihil doloribus soluta tempore aut eveniet praesentium incidunt. Repellendus cupiditate debitis voluptatem explicabo similique! Tenetur eligendi quam, dicta, rem maiores enim reprehenderit aperiam sint veritatis aspernatur hic nostrum facere beatae! Dolorem tenetur sint quisquam, reiciendis soluta ad nam? Nemo animi delectus tempora maiores sint odit facilis quam sed illum commodi magni suscipit aliquam fuga dolore dolor, labore debitis sit adipisci quibusdam eius aut nobis. Reprehenderit rerum fuga totam ullam obcaecati numquam, itaque iste non deserunt. Explicabo nobis, veritatis quia perspiciatis maiores nam maxime alias in officia sint nulla aut sed deserunt ex debitis aliquam ut eaque neque fuga! Dignissimos asperiores temporibus debitis excepturi perspiciatis natus quisquam earum veniam eaque ab cumque harum illo eligendi quas ex nulla, minima nemo odio? Quam repellendus quibusdam eligendi, fugit deleniti temporibus dolorum aspernatur deserunt facilis quidem? Ducimus sint minus debitis vero laborum. Quod expedita odit vitae nobis quis ratione voluptas omnis tempore. Dolor nemo distinctio voluptatum assumenda, possimus inventore explicabo suscipit mollitia provident iste consequuntur pariatur dignissimos?
     </div>



      </center>
    </>
  )
}

export default App


// root Component
// Javacript XML : we can write javascript with html code 