import { useState } from 'react';

function ArticleForm({ onAjouter }) {
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');

  const soumettre = (e) => {
    e.preventDefault();
    if (titre.trim() === '' || contenu.trim() === '') return;
    onAjouter({ id: Date.now(), titre, contenu });
    setTitre('');
    setContenu('');
  };

  return (
    <div className="carte">
      <p className="eyebrow">Nouveau</p>
      <h3>Ajouter un article</h3>
      <form className="formulaire" onSubmit={soumettre}>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          placeholder="Titre de l'article"
        />
        <textarea
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          placeholder="Contenu de l'article"
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default ArticleForm;
