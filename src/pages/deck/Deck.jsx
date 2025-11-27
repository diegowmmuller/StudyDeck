import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/api';

import CardItem from '../../components/cards/CardItem';
import CardForm from '../../components/cards/CardForm';
import { NavBar } from '../../components/navbar/NavBar';
import styles from './Deck.module.css';

export const Deck = () => {
  const getId = (card) => card.id ?? card._id;
  const { user } = useContext(AuthContext);
  const [userArray, setUserArray] = useState([]);

  const userId = user?.id;

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    if (user) {
      setUserArray(user);
    }
  }, [user]);

  useEffect(() => {
    if (!userId) {
      setCards([]);
      setLoading(false);
      return;
    }
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  async function fetchCards() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(`/cards/user/${userId}`);
      setCards(res.data || []);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar cards');
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setEditingCard(null);
    setShowForm(true);
  }

  function openEdit(card) {
    setEditingCard(card);
    setShowForm(true);
  }

  function closeForm() {
    setEditingCard(null);
    setShowForm(false);
    // Apenas adicionei esta linha para recarregar após fechar
    fetchCards();
  }

  async function handleDelete(cardId) {
    if (!confirm('Deseja realmente excluir este card?')) return;
    try {
      await api.delete(`/cards/${cardId}`);
      setCards((prev) => prev.filter((c) => c.id !== cardId));
    } catch (err) {
      console.error(err);
      alert('Erro ao excluir card');
    }
  }

  // Resto do código permanece igual...
  const stats = [
    { number: cards.length.toString(), label: "Cards Criados" },
    { number: "0", label: "Horas Estudadas" },
    { number: "100%", label: "Foco nos Estudos" },
    { number: "24/7", label: "Disponível" }
  ];

  return (
    <div className={styles.deckPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Meu <span className={styles.highlight}>Deck</span> de Estudos
            </h1>
            <p className={styles.heroSubtitle}>
              Organize, gerencie e acompanhe seu progresso de estudos de forma simples e eficiente.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton} onClick={openCreate}>
                Criar Novo Card
              </button>
              {/* <button className={styles.secondaryButton} onClick={fetchCards}>
                Atualizar Deck**
              </button> */}
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              📚
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

      {/* Cards Section */}
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meus Cards de Estudo</h2>
            <p className={styles.sectionSubtitle}>
              Gerencie todos os seus materiais de estudo em um só lugar
            </p>
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <p className={styles.info}>Carregando seus cards...</p>
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{error}</p>
            </div>
          ) : cards.length === 0 ? (
            <div className={styles.emptyContainer}>
              <div className={styles.emptyContent}>
                <div className={styles.emptyIcon}>📝</div>
                <h3 className={styles.emptyTitle}>Nenhum card criado ainda</h3>
                <p className={styles.emptyText}>
                  Comece criando seu primeiro card de estudo para organizar melhor seu aprendizado.
                </p>
                <button className={styles.primaryButton} onClick={openCreate}>
                  Criar Primeiro Card
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.grid}>
              {cards.map((card) => {
                const id = getId(card);
                return (
                  <CardItem 
                    key={id} 
                    card={card} 
                    onEdit={() => openEdit(card)} 
                    onDelete={() => handleDelete(id)} 
                    onRefresh={fetchCards} 
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {showForm && (
        <CardForm 
          onClose={closeForm} 
          onSaved={fetchCards} 
          editingCard={editingCard} 
          userId={userId} 
        />
      )}
    </div>
  );
};