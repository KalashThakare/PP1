import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/user-login' element={<Userlogin />}/>
        <Route path='/user-register' element={<UserSignup />}/>
        <Route path='/captain-login' element={<Captainlogin />}/>
        <Route path='/captain-register' element={<CaptainSignup />}/>
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
      </Routes>
    </div>
  )
}

export default App