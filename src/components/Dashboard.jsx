import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Dashboard = ({data}) => {
  const navigate = useNavigate();
  if(!data){
    navigate('/')
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-700">Welcome to your dashboard!</p>
          {data && <p className="mt-4 text-green-600">{data.message.username}</p>}
          {data && <p className="mt-4 text-green-600">{data.message.email}</p>}
          
        </div>
      </div>
    </>
  )
}
export default Dashboard
