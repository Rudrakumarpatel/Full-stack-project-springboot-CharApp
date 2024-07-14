import React, { useState } from "react";
import Navbar from "./Navbar";

function Login({userData,setUserData,registerUser, handleEmail }) {

  const [useLogin,setLogin] = useState({
    username:"",
    email:"",
  })
 
  const handleChange = (event) => 
  {
    setUserData({...userData,[event.target.name]:event.target.value})
    setLogin({...useLogin,[event.target.name]:event.target.value});  
  };
  const LoginUser = (e)=>
  {
    e.preventDefault();
    //check for Login 
    localStorage.setItem("userData",JSON.stringify(useLogin));
    registerUser();
  }
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="navbar">
        <Navbar />
        </div>
        <div className="w-full max-w-md mx-auto border">
          {" "}
          {/* Added mx-auto for centering */}
          <form
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={LoginUser}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={useLogin.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={useLogin.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="transition-all duration-300 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
