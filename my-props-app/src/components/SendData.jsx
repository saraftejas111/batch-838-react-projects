import React from 'react'

const SendData = ({ sendName }) => {

    return (
        <div>

            <button onClick={() => sendName("hello from child....")}>Send To Parent</button>
        </div>
    )
}

export default SendData
