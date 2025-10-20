import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = ({ data , setRefr}) => {
  const [verified, setVerified] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://final-checking.vercel.app/api/verified', { withCredentials: true }).then(res => {
      setVerified(res.data.message)
      console.log(res.data.message);
    })
  }, [data,navigate,verified]);
  if (verified == "you logged in") {
    navigate('/dashboard') }
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Please fill all fields');
     }
    try {
      const res = await axios.post('https://final-checking.vercel.app/api/login', {
        email,
        password
      }, { withCredentials: true });
      localStorage.setItem('data', JSON.stringify(res.data));
      console.log('Login successful:', res.data);
      alert("Login Successful");
      setVerified('hello')
      setRefr('hello')
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed:', error.response?.data?.msg || error.message);
      alert(error.response?.data?.msg || 'Login failed');
    }
  };
  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
          <Link to="/signup">
            Sign Up
          </Link>
      </p>
    </div>
  );
};
export default Login;
