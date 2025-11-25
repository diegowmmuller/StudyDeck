import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken) {
      setToken(savedToken);
    };
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    };
  }, []);

  function login(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    
  }

  function logout(token) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  }

  const isAuthenticated = !!token;

  return <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
}
