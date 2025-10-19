import React from 'react'
import { useState,useEffect } from 'react'
const Uploadpic = () => {
  return (
    <div>
    
      <form action="https://final-checking.vercel.app/api/upload" method="POST" encType='multipart/form-data' >
      <input type="file" name="pic"/>
<button type="submit" className='bg-gray-500 rounded-md p-1 text-white'>upload</button>
      </form>
    </div>
  )
}

export default Uploadpic
