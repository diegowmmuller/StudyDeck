import { useState } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await api.post('/users/register', {
        name,
        username,
        email,
        password,
      });

      alert('Conta criada com sucesso!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Erro ao criar conta');
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Cadastro</h2>

      <input type="text" placeholder="Nome completo" onChange={(e) => setName(e.target.value)} />

      <input type="text" placeholder="Nome de usuário" onChange={(e) => setUsername(e.target.value)} />

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

      <button>Cadastrar</button>
    </form>
  );
}
