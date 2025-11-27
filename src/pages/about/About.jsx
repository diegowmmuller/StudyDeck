import { NavBar } from '../../components/navbar/NavBar';
import styles from './About.module.css';

export default function About() {
  const participants = [
    "Lorenzo Bruscato",
    "Gabriel Teotõnio Cordeiro", 
    "Murilo Vieira Moura",
    "Diego Wobeto Maglia Muller",
    "Henrique Bernardes Rosa",
    "Luan Campi Galatti",
  ];

  const technologies = [
    "React + Vite",
    "JavaScript",
    "CSS3",
    "HTML5"
  ];

  const stats = [
    { number: "6", label: "Desenvolvedores" },
    { number: "4", label: "Tecnologias" },
    { number: "100%", label: "Dedicados" },
    { number: "UNISUL", label: "Universidade" }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Missão",
      description: "Criar uma plataforma acessível para melhorar a gestão do tempo de estudos."
    },
    {
      icon: "👥",
      title: "Equipe",
      description: "Desenvolvido por estudantes de Ciência da Computação da UNISUL."
    },
    {
      icon: "💡",
      title: "Inovação",
      description: "Utilizando as mais modernas tecnologias do mercado."
    },
    {
      icon: "🚀",
      title: "Futuro",
      description: "Expandir e melhorar continuamente a plataforma."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Sobre o <span className={styles.highlight}>StudyDeck</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Conheça a equipe por trás do projeto que está revolucionando 
              a maneira como os estudantes organizam seus estudos.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              👨‍💻
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

      {/* Project Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>🎓 O Projeto</h2>
              <p className={styles.infoText}>
                O <strong>StudyDeck</strong> é um projeto acadêmico desenvolvido pelos alunos 
                da Universidade do Sul de Santa Catarina (UNISUL) com o objetivo de melhorar 
                a <strong>gestão dos estudos</strong>. A plataforma facilita a administração 
                do tempo de estudo de forma intuitiva e acessível.
              </p>
            </div>
            
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>🎯 Objetivo</h2>
              <p className={styles.infoText}>
                Criar um site de gerenciamento de estudos onde o usuário consiga desfrutar 
                de uma experiência simples, direta e focada na usabilidade para todos os 
                perfis de usuários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nossa Abordagem</h2>
          <p className={styles.sectionSubtitle}>
            Conheça os pilares que fundamentam nosso projeto
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

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>👥 Nossa Equipe</h2>
          <p className={styles.sectionSubtitle}>
            Conheça os desenvolvedores por trás do StudyDeck
          </p>
          
          <div className={styles.participantsGrid}>
            {participants.map((participant, index) => (
              <div key={index} className={styles.participantCard}>
                <div className={styles.participantAvatar}>
                  {participant.charAt(0)}
                </div>
                <span className={styles.participantName}>{participant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className={styles.advisorsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>🧑‍🏫 Orientadores</h2>
          <div className={styles.advisorSection}>
            <p className={styles.advisorText}>
              Professores <strong className={styles.advisorName}>Saulo Arisa</strong> e {' '}
              <strong className={styles.advisorName}>Claudio Henrique da Silva</strong>, 
              responsáveis por guiar o desenvolvimento, validar as etapas e orientar 
              quanto às tecnologias e metodologias utilizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>🛠️ Tecnologias Utilizadas</h2>
          <p className={styles.sectionSubtitle}>
            Stack tecnológica que utilizamos para construir o StudyDeck
          </p>
          <div className={styles.techTags}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalSection}>
        <div className={styles.finalContainer}>
          <h2 className={styles.finalTitle}>Pronto para transformar seus estudos?</h2>
          <p className={styles.finalText}>
            Junte-se a nós nessa jornada de aprendizado e organização
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2024 StudyDeck - UNISUL. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}