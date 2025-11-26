import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/navbar/NavBar';
import styles from './Home.module.css';

export const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const features = [
    {
      icon: "📚",
      title: "Organize seus Estudos",
      description: "Crie e gerencie seus cards de estudo de forma simples e intuitiva."
    },
    {
      icon: "⏰",
      title: "Controle de Tempo",
      description: "Acompanhe seu tempo de estudo e defina metas realistas."
    },
    {
      icon: "📊",
      title: "Acompanhe seu Progresso",
      description: "Visualize suas estatísticas e evolução nos estudos."
    },
    {
      icon: "🎯",
      title: "Foco nos Objetivos",
      description: "Mantenha o foco no que realmente importa para seu aprendizado."
    }
  ];

  const stats = [
    { number: "1000+", label: "Horas de Estudo" },
    { number: "500+", label: "Cards Criados" },
    { number: "95%", label: "Satisfação dos Usuários" },
    { number: "24/7", label: "Disponível" }
  ];

  const handleGetStarted = () => {
    if (user) {
      // Se o usuário está logado, vai direto para o deck
      navigate('/deck');
    } else {
      // Se não está logado, vai para o login
      navigate('/login');
    }
  };

  return (
    <div className={styles.homePage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Study is <span className={styles.highlight}>Easy</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transforme sua maneira de estudar com nossa plataforma intuitiva 
              de gerenciamento de cards educacionais.
            </p>
            <div className={styles.heroButtons}>
              <button 
                className={styles.primaryButton}
                onClick={handleGetStarted}
              >
                Começar Agora
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => navigate('/about')}
              >
                Saiba Mais
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              🎓
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por que escolher o Study is Easy?</h2>
          <p className={styles.sectionSubtitle}>
            Uma plataforma desenvolvida para tornar seus estudos mais eficientes e organizados
          </p>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Pronto para transformar seus estudos?</h2>
          <p className={styles.ctaText}>
            Junte-se a milhares de estudantes que já melhoraram sua organização e rendimento
          </p>
          <button 
            className={styles.ctaButton}
            onClick={handleGetStarted}
          >
            Criar Meu Primeiro Card
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>&copy; 2024 Study is Easy - UNISUL. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};