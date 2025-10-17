import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Navbar = ({ data,setData ,setRefr}) => {
  const handlelogout = async () => {
    const logout = await axios.get('http://localhost:5000/api/logout', { withCredentials: true })
    setData(null)
    setRefr("l")
  }  
  return (
    <nav className='flex bg-blue-800 justify-between p-5'>
      <h1 className='text-2xl font-bold'>LOAN APP</h1>
      <ul className='flex space-x-10'>
        {data&&<li><Link to='/dashboard'><button className=' font-bold bg-black text-white  p-2  rounded-2xl'>Dashboard</button></Link></li>}
        <Link to='/home' ><li><button className=' font-bold bg-black p-2 text-white rounded-2xl'>Home</button></li></Link>
        <li><button className=' font-bold bg-black text-white p-2  rounded-2xl'>About</button></li>
      </ul>
      {!data&&<Link to='/'> <button className='font-bold  bg-black text-white p-2 rounded-2xl'>Login</button></Link>}
      {data&&<button className='font-bold bg-black text-white p-2 rounded-2xl' onClick={() => {handlelogout()}}>Log out</button>}
    </nav>
  )
}

export default Navbar
