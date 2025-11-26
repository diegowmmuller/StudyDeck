import api from '../../api/api';
import React from 'react';
import styles from './CardItem.module.css';

/*
  Props:
    card: object
    onEdit: fn
    onDelete: fn
    onRefresh: fn (opcional)
*/
export default function CardItem({ card, onEdit, onDelete }) {
  const getId = (card) => card.id ?? card._id;

  async function showDetails() {
    const id = getId(card);
    const res = await api.get(`/cards/${id}`);
    const full = res.data;
    alert(`Nome: ${full.name}\nDescrição: ${full.description || '-'}`);
  }

  return (
    <div className={styles.card} style={{ background: card.color || '#fff' }} role="article">
      <div className={styles.content} onClick={showDetails}>
        <h3 className={styles.title}>{card.name}</h3>
        <p className={styles.desc}>{card.description}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.smallBtn} onClick={onEdit}>
          Editar
        </button>
        <button className={styles.smallBtnDanger} onClick={() => onDelete(card.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}
