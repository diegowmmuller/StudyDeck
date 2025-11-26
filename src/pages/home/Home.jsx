import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/api';

import CardItem from '../../components/cards/CardItem';
import CardForm from '../../components/cards/CardForm';
import styles from './Home.module.css';

export const Home = () => {
  const getId = (card) => card.id ?? card._id;
  const { user } = useContext(AuthContext);
  const [userArray, setuserArray] = useState([]);

  const userId = user?.id;

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    if (user) {
      setuserArray(user);
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
  }

  async function handleDelete(cardId) {
    if (!confirm('Deseja realmente excluir este card?')) return;
    try {
      await api.delete(`/cards/${cardId}`); // VERIFICAR
      setCards((prev) => prev.filter((c) => c.id !== cardId));
    } catch (err) {
      console.error(err);
      alert('Erro ao excluir card');
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meus Cards</h1>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={openCreate}>
            Criar Card
          </button>
          <button className={styles.btn} onClick={fetchCards}>
            Atualizar
          </button>
        </div>
      </header>

      {loading ? (
        <p className={styles.info}>Carregando...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : cards.length === 0 ? (
        <p className={styles.info}>Nenhum card ainda.</p>
      ) : (
        <div className={styles.grid}>
          {cards.map((card) => {
            const id = getId(card);
            return <CardItem key={id} card={card} onEdit={() => openEdit(card)} onDelete={() => handleDelete(id)} onRefresh={fetchCards} />;
          })}
        </div>
      )}

      {showForm && <CardForm onClose={closeForm} onSaved={fetchCards} editingCard={editingCard} userId={userId} />}
    </div>
  );
};
