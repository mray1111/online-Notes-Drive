import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", name: "" });
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://i-notebook-backend-iitg-1.onrender.com/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, name: credentials.name })
    });

    console.log("resonse is ",response)
    
    const json = await response.json();

    if (json){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authToken); 
        navigate("/");

    }
    else{
        alert("Invalid credentials");
    }
    console.log("Sign up successfully ")
    console.log(json);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 max-sm:mt-[100px] max-sm:ml-[200px] max-sm:w-[400px]  ">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
