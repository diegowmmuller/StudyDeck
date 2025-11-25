import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <h1 className={styles.registerTitle}>Criar Conta</h1>
          <p className={styles.registerSubtitle}>Comece a organizar seus estudos</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nome completo</label>
            <input 
              type="text" 
              className={styles.formInput}
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nome de usuário</label>
            <input 
              type="text" 
              className={styles.formInput}
              placeholder="Seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input 
              type="email" 
              className={styles.formInput}
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Senha</label>
            <input 
              type="password" 
              className={styles.formInput}
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className={styles.registerButton}
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </button>
        </form>

        <div className={styles.loginLink}>
          <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
        </div>
      </div>
    </div>
  );
}