import React, { useState } from 'react';
import axios from 'axios'; // 1. Axios-ah ulla kondu varom
import { useNavigate } from 'react-router-dom'; // Route change panna help pannum

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: username,
        password: password
      });

      // Token save pannuvom
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      alert("Login Success!");
      
      // Navigate command - Ithu thaan ungalai Dashboard ku kootitu pogum
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
        
        {/* We added onSubmit here to trigger our function */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            className="border p-2 rounded"
            // We connect the input to our state here:
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border p-2 rounded"
            // We connect the password input to our state here:
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