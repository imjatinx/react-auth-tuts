import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(username, password)
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