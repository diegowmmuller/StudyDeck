import api from '../../api/api';
import React from 'react';
import styles from './CardItem.module.css';

export default function CardItem({ card, onEdit, onDelete }) {
  const getId = (card) => card.id ?? card._id;

  async function showDetails() {
    const id = getId(card);
    const res = await api.get(`/cards/${id}`);
    const full = res.data;
    alert(`Nome: ${full.name}\nDescrição: ${full.description || '-'}`);
  }

  return (
    <div
      className={styles.card}
      style={{
        borderLeftColor: card.color || '#4a90e2',
      }}
      role="article"
    >
      {/* Ribbon lateral */}
      <div
        className={styles.ribbon}
        style={{
          backgroundColor: card.color || '#4a90e2',
        }}
      ></div>

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
