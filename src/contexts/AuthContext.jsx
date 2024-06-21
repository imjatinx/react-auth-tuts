import React, { createContext } from 'react'
import API from '../api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const isAuthenticated = () => {
        const token = localStorage.getItem('token')
        if (token) {
            return true;
        }
        return false;
    };

    const login = async (username, password) => {
        try {
            const response = await API.post('login', { username, password })
            if (response.data.access && response.data.refresh) {
                localStorage.setItem('token', response.data.access)
                console.log('Response:', response.data);
                navigate("/dashboard")
            }
        } catch (error) {
            alert("Login Failed! Wrong Credentials")
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }