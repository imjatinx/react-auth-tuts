import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Dashboard from './screens/Dashboard.jsx'
import PrivateRoutes from './components/PrivateRoutes.jsx'
import Settings from './screens/Settings.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
