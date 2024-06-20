import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>Home</div>
        <div>
          <Link to={'/login'}>Login</Link>
        </div>
        <div>
          <Link to={'/register'}>Register</Link>
        </div>
      </div>
    </>
  )
}

export default Home