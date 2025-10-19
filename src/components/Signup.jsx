import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
const Signup = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [enic, setEnic]     = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const resdata = JSON.parse(localStorage.getItem('data'))
  if (resdata){
    if(resdata.message == 'user created'){ 
      navigate('/');
      alert('successfully signed up check your email')
    }
  }
  const handleSignup =async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return  alert('Please fill all fields');
    }
    try {
       const newres = await axios.post('https://final-checking.vercel.app/api/create-user', {
        username,
        email,
        enic,
        password
      })
      console.log(newres.data);
      localStorage.setItem('data', JSON.stringify(newres.data));
      localStorage.setItem('token', newres.token);
      const logintoken = localStorage.getItem('token')
      
    } catch (error) {
      console.log(error.message)
      console.log(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="enic"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={enic}
          onChange={(e) => setEnic(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <span className="text-blue-500 cursor-pointer" onClick={onSwitch}>
        <Link to="/">
          Login
        </Link> 
        </span>
      </p>
    </div>
  );
};

export default Signup;

