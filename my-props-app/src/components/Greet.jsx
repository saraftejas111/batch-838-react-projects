import React from 'react'

const Greet = ({name = "Guest"}) => {
  return (
    <div>
      <h2>Welcome to our application .... {name}</h2>
    </div>
  )
}

export default Greet
