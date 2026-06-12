import React, { useState } from 'react'

const SocialMediaPost = () => {

 const [like , setLike] = useState(0)
 const [laugh , setLaugh] = useState(0)
 const [wow , setWow] = useState(0)

 const handleReset = () => {
    setLike(0)
    setLaugh(0)
    setWow(0)
 }

  return (
    <div>
      
      <button onClick={()=>{setLike(like+1)}}>❤️</button> = {like} <br /><br />
      <button onClick={()=>{setLaugh(laugh+1)}}>😆</button> = {laugh} <br /><br />
      <button onClick={()=>{setWow(wow+1)}}>🤩</button> = {wow} <br /><br />
      <button onClick={handleReset}>🚮RESET ALL</button> <br /><br />

    
      
    </div>
  )
}

export default SocialMediaPost
