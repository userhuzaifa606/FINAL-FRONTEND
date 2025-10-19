import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const verification = () => {
    const [verification , setVerification] = useState('');
    const navigate = useNavigate()
   const resdata= JSON.parse(localStorage.getItem('data'))
   if(!resdata){
       navigate('/')
   }
    const handlecancel = ()=>{
        localStorage.removeItem('data')
        navigate('/')
    }
    const handleverify = async () => {
    e.preventDefault();
    if (!verify) {
      return alert('Please fill all fields');
     }
    try {
      const res = await axios.post('https://final-checking.vercel.app//api/verify', {
        verify,
      }, { withCredentials: true });
      console.log('Login successful:', res.data);
      alert("verification Successful");
      setVerified('update')
      setRefr('update')
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed:', error.response?.data?.msg || error.message);
      alert(error.response?.data?.msg || 'Login failed');
    }}
  return (
   <div className="w-full max-w-sm mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleverify} className="space-y-4">
        <input
          type="number"
          placeholder="verfication code"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={verification}
          onChange={(e) => setVerification(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          Verify
        </button>
      </form>
        <button onClick={handlecancel} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-2 rounded">
          Cancel Process
        </button>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
          <Link to="/signup">
            Sign Up
          </Link>
      </p>
    </div>
  )
}
export default verification 