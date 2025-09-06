import React from 'react'
import Notfound from "404error.webp"

const Notfound=()=> {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <img className="h-[50%] object-cover" src={notfound} alt="" />
    </div>
  )
}

export default Notfound;