import { useParams, Link } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <div className="carte">
        <p className="eyebrow">Erreur</p>
        <p>Article introuvable.</p>
        <Link className="lien-retour" to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="carte">
      <p className="eyebrow">Article</p>
      <h2>{article.titre}</h2>
      <p>{article.contenu}</p>
      <Link className="lien-retour" to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default ArticleDetail;
