import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './pages/Footer'
import EnterText from './pages/EnterText'
import ChatBot from './components/ChatBot'

//  <div className="min-h-screen w-full text-black bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 "></div>
const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Background Glow Blobs */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[180px] animate-pulse" />
      </div> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/entertext' element={<EnterText />} />
      </Routes>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App