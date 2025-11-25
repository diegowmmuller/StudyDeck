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

  return (
    <div className={styles.aboutPage}>
      <main className={styles.aboutContainer}>
        {/* Cabeçalho */}
        <div className={styles.aboutHeader}>
          <div className={styles.headerContent}>
                <img src="https://pm1.aminoapps.com/6244/6e71510fc4fe3def2d1dcc99efdff81694b628a8_00.jpg" alt="" />
          </div>
          
          <h1 className={styles.aboutTitle}>Sobre o Projeto</h1>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Conteúdo */}
        <section className={styles.aboutContent}>
          <div className={styles.introSection}>
            <p className={styles.introText}>
              O <strong className={styles.highlight}>Study is Easy</strong> é um
              projeto acadêmico desenvolvido pelos alunos da Universidade do Sul
              de Santa Catarina (UNISUL) com o objetivo de melhorar a{" "}
              <strong className={styles.highlight}>gestão dos estudos</strong>. O
              projeto visa criar um site que facilite a administração do usuário
              em relação ao tempo de estudo.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleBullet}></span>
              Objetivo do Projeto
            </h2>
            <p>
              O objetivo principal é a criação de um site de gerenciamento de
              estudos onde o usuário consiga desfrutar de uma experiência
              simples, direta e acessível, focando na usabilidade para todos os
              perfis de usuários.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleBullet}></span>
              Participantes
            </h2>
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

          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleBullet}></span>
              Orientadores
            </h2>
            <div className={styles.advisorSection}>
              <p>
                Professores{" "}
                <strong className={styles.advisorName}>Saulo Arisa</strong> e{" "}
                <strong className={styles.advisorName}>
                  Claudio Henrique da Silva
                </strong>
                , responsáveis por guiar o desenvolvimento, validar as etapas e
                orientar quanto às tecnologias e metodologias utilizadas.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleBullet}></span>
              Tecnologias Utilizadas
            </h2>
            <div className={styles.techTags}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.finalSection}>
            <h2 className={styles.finalTitle}>Objetivo Final</h2>
            <p className={styles.finalText}>
              Criar uma solução acessível e inclusiva para todos que desejam
              gerenciar seu tempo de estudos de forma eficiente e intuitiva.
            </p>
          </div>
        </section>

        {/* Rodapé */}
        <footer className={styles.aboutFooter}>
          <p>© 2024 Study is Easy - UNISUL. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}