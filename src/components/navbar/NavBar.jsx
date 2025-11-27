import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './NavBar.module.css';
import logo from '../assets/logo.png';

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </div>
          <span className={styles.brandName}>StudyDeck</span>
        </div>

        <div className={styles.navLinks}>
          <a href="/home" className={styles.navLink}>
            Home
          </a>
          <a href="/deck" className={styles.navLink}> {/* CORRIGIDO: /about → /deck */}
            Deck
          </a>
          <a href="/about" className={styles.navLink}>
            Sobre
          </a>
        </div>

        <div className={styles.userSection}>
          {user && (
            <span className={styles.userName}>
              Olá, {user.name || user.email}
            </span>
          )}
          <button
            className={styles.logoutBtn}
            onClick={() => {
              logout();            
              window.location.href = '/login'; 
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};