import './App.css'
import Login from '../src/Component/Manufacturer/Login'
import LoginT from '../src/Component/Transporter/LoginT'
import Register from '../src/Component/Manufacturer/Register'
import RegisterT from '../src/Component/Transporter/RegisterT'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Component/Manufacturer/LandingPage'
import LandingPageT from './Component/Transporter/LandingPageT'
import { useState } from 'react'
function App() {

  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginT" element={<LoginT />} />
          <Route path="/register" element={<Register />} />
          <Route path='/registerT' element={<RegisterT />} />
          <Route path='/dashboad' element={<LandingPage onSubmit={handleMessageSubmit} />} />
          <Route path='/dashboadT' element={<LandingPageT onSubmit={messages} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
