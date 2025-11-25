import { useState, useContext } from 'react';
import api from '../../api/api';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post('/users/login', {
        email,
        password,
      });

      login(res.data.token); // salva o token
      navigate('/dashboard'); // vai para rota protegida
    } catch (err) {
      alert('Credenciais inválidas');
    }
  }

  return (
    <>
      <h1>Pagina de Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email: <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Senha: <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
