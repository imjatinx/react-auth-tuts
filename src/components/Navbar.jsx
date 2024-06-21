import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout();
    }
    return (
        <div style={{ backgroundColor: 'grey', display: "flex", alignItems: "center", padding: "20px" }}>
            <div>
                <Link style={{ color: 'black', textDecoration: "none", margin: "0 20px" }} to='/dashboard'>Dashboard</Link>
            </div>
            <div>
                <Link style={{ color: 'black', textDecoration: "none", margin: "0 20px" }} to='/settings'>Settings</Link>
            </div>
            <div>
                <button style={{ backgroundColor: "red", margin: "0 20px", border: "none", outline: "none", padding: "5px 10px", cursor: "pointer", fontWeight: "800" }} onClick={() => { handleLogout() }}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar