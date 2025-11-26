import { useState, useEffect } from 'react';
import api from '../../api/api';
import styles from './CardForm.module.css';

/*
 Props:
  editingCard: card object | null
  onClose: fn
  onSaved: fn  (to refresh list)
  userId: number
*/
export default function CardForm({ editingCard, onClose, onSaved, userId }) {
  const emptyForm = {
    name: '',
    description: '',
    start_time: '',
    end_time: '',
    status: 'todo',
    color: '#6c5ce7',
  };

  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingCard) {
      const toDateTimeLocal = (iso) => (iso ? new Date(iso).toISOString().slice(0, 16) : '');
      setForm({
        name: editingCard.name || '',
        description: editingCard.description || '',
        start_time: toDateTimeLocal(editingCard.start_time),
        end_time: toDateTimeLocal(editingCard.end_time),
        status: editingCard.status || 'todo',
        color: editingCard.color || '#6c5ce7',
      });
    } else {
      setForm(emptyForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingCard]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function toISO(localDateTime) {
    if (!localDateTime) return null;
    const d = new Date(localDateTime);
    return d.toISOString();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      name: form.name,
      description: form.description,
      start_time: toISO(form.start_time),
      end_time: toISO(form.end_time),
      status: form.status,
      color: form.color,
      user_id: userId,
    };

    try {
      if (editingCard) {
        const id = editingCard.id ?? editingCard._id;
        await api.put(`/cards/${id}`, payload);
      } else {
        await api.post('/cards', payload);
      }
      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Erro ao salvar card');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>{editingCard ? 'Editar Card' : 'Criar Card'}</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} required className={styles.input} />

          <textarea
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleChange}
            className={styles.textarea}
          />

          <label className={styles.label}>
            Início
            <input type="datetime-local" name="start_time" value={form.start_time} onChange={handleChange} className={styles.input} />
          </label>

          <label className={styles.label}>
            Fim
            <input type="datetime-local" name="end_time" value={form.end_time} onChange={handleChange} className={styles.input} />
          </label>

          <label className={styles.label}>
            Status
            <select name="status" value={form.status} onChange={handleChange} className={styles.select}>
              <option value="todo">A Fazer</option>
              <option value="doing">Fazendo</option>
              <option value="done">Feito</option>
            </select>
          </label>

          <label className={styles.label}>
            Cor
            <input type="color" name="color" value={form.color} onChange={handleChange} className={styles.color} />
          </label>

          <div className={styles.actions}>
            <button type="button" onClick={onClose} className={styles.btnSecondary}>
              Cancelar
            </button>
            <button type="submit" className={styles.btnPrimary} disabled={saving}>
              {saving ? 'Salvando...' : editingCard ? 'Salvar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
