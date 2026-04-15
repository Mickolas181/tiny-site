import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState({
    main_title: '',
    teachers_count: 0,
    experience_years: 0,
    students_enrolled: 0,
    total_branches: 0
  });

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-data/');
        setSiteData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchSiteData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const handleChange = (e) => {
    setSiteData({ ...siteData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.post('http://127.0.0.1:8000/api/update-data/', siteData, { 
        headers: { 'Authorization': `Bearer ${token}` } 
      });
      alert("Impact Numbers Updated Successfully! 🔥");
    } catch (error) {
      alert("Update Failed. Check connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-[#0F3460]">Tiny Todds CMS</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 font-semibold">
            Logout
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-6 border-b pb-2 text-[#00ADB5]">Edit 'Our Impact' Numbers</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Qualified Teachers</label>
              <input type="number" name="teachers_count" value={siteData.teachers_count} onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-[#00ADB5]" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Years Of Experience</label>
              <input type="number" name="experience_years" value={siteData.experience_years} onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-[#00ADB5]" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Students Enrolled</label>
              <input type="number" name="students_enrolled" value={siteData.students_enrolled} onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-[#00ADB5]" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Total Branches</label>
              <input type="number" name="total_branches" value={siteData.total_branches} onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-[#00ADB5]" />
            </div>
          </div>

          <button onClick={handleUpdate} 
            className="bg-[#0F3460] text-white px-6 py-3 rounded w-full font-bold mt-8 hover:bg-[#1a4a82]">
            Save Numbers to Live Site
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;