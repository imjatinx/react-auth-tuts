import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/login', { username, password })
      if (response.data.access && response.data.refresh) {
        localStorage.setItem('token', response.data.access)
        console.log('Response:', response.data);
        navigate("/dashboard")
      }
    } catch (error) {
      alert("Login Failed! Wrong Credentials")
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='Username here' value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login