import React, { useState } from 'react'
import Xx from './Xx'

const Yy = ({sendToApp}) => {

    const [zz , setZz] = useState("")

  return (
    <div>
      accept : <input type="text" value={zz} onChange={(e) => setZz(e.target.value)}  />

      <button onClick={() => sendToApp(zz)}>Send</button>
    </div>
  )
}

export default Yy
