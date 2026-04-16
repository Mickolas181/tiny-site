import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Change this to use environment variable
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/login/`, {
        username: username,
        password: password
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      alert("Login Success!");
      navigate('/admin-dashboard'); 

    } catch (error) {
      console.error("Login Failed", error);
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            className="border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-600"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}

export default AdminLogin;
