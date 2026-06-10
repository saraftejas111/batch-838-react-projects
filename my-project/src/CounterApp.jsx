import React, { useState } from 'react'

const CounterApp = () => {

    let count = 0;

    const [scount, setScount] = useState(0)   // hook

    const handleIncrease = () => {

        count++;
        console.log("normal var = ", count)

        setScount(scount + 1)
        console.log("dynamic var = ", scount)

    }
    const handleDecrease = () => {

        count--;
        console.log("normal var = ", count)

        setScount(scount - 1)
        console.log("dynamic var = ", scount)

    }
    return (
        <div>

            <h1>
                Hello I am From Counter App
            </h1>

            <h2>
                Normal Count = {count} {" | "} State Count = {scount}

            </h2>
            {/* <button onClick={handleIncrease}>Increase</button> <br /> <br /> */}
            <button onClick={() => { setScount(scount + 1) }}>Increase</button> <br /> <br />

            {/* <button onClick={handleDecrease}>Decrease</button> <br /> <br /> */}
            <button onClick={() => { setScount(scount - 1) }}>Decrease</button> <br /> <br />

            <button onClick={() => { setScount(scount * 0) }}>Reset</button> <br /> <br />
        </div>
    )
}

export default CounterApp
