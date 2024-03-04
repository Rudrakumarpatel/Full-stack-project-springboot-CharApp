import React from 'react'
import ChatRoom from './components/ChatRoom'
import Home from './components/Home';
import Login from './components/Login.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup.jsx';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chatroom' element={<ChatRoom/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App;

