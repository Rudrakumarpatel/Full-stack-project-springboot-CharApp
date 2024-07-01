// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
    
//     <nav className="absolute top-0 right-0 mt-4 ml-4 w-full flex justify-between ">
//         <div className="title ml-5 flex items-center text-white p-2 rounded">
//           <img src="#" alt="image" className="w-8 h-8 mr-2" />
//           <h1 className="text-3xl font-bold border-b-4 border-transparent hover-gradient">
//             ChatApp
//           </h1>
//         </div>
//         <div className="auth mr-5">
//           <Link
//             to="/chatroom"
//             className="text-white font-semibold hover:text-blue-400 mx-2 text-lg"
//           >
//             Login
//           </Link>
//           <Link
//             to="/Signup"
//             className="text-white font-semibold hover:text-blue-400 mx-2 text-lg"
//           >
//             Signup
//           </Link>
//         </div>
//       </nav>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="absolute top-0 right-0 pt-1 ml-4 w-screen flex justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="title ml-5 flex items-center text-white p-2 rounded">
        <img src={logo} alt="image" className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold border-b-4 border-transparent hover-gradient">
          TalkWave
        </h1>
      </div>
      <div className="auth mr-5 pt-2">
        <Link
          to="/chatroom"
          className="text-white font-semibold hover:text-blue-400 mx-2 text-lg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-white font-semibold hover:text-blue-400 mx-2 text-lg"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
