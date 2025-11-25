import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  function login(token) {
    localStorage.setItem('token', token);
    setToken(token);
  }

  function logout(token) {
    localStorage.removeItem('token');
    setToken(null);
  }

  const isAuthenticated = !!token;

  return <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
}
