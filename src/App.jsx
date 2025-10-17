import { useState,useEffect } from 'react'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Verification from './components/verification.jsx';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function App() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [refr,setRefr ] = useState();
  const resdata = JSON.parse(localStorage.getItem('data')) || null
  useEffect(() => {
     axios.get('http://localhost:5000/api/dashboard', { withCredentials: true }).then(res => {
      console.log('Protected data:', res.data)
      setData(res.data);
    })
      .catch(err => {
        console.error('Error fetching protected data:', err);
        setData(null)
      });
  }, [refr]);
  return (
    <>
      <Navbar data={data} setData={setData} setRefr={setRefr} />
      <Routes>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/verification' element={<Verification />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/' element={<Login setRefr={setRefr} data={data}/>} ></Route>
        <Route path='/dashboard' element={<Dashboard data={data} />} ></Route>
      </Routes>
    </>
  )
}
export default App
