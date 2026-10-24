import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm';

function Accueil({ articles, onAjouter }) {
  return (
    <div>
      <div className="hero">
        <p className="eyebrow">Blog</p>
        <h1>Bienvenue sur mon Blog</h1>
        <p>Découvrez nos derniers articles ci-dessous :</p>
      </div>

      <div className="carte">
        <div className="carte-tete">
          <div>
            <p className="eyebrow">Publications</p>
            <h3>Liste des articles</h3>
          </div>
          <span className="badge">{articles.length}</span>
        </div>
        <ArticleList articles={articles} />
      </div>

      <ArticleForm onAjouter={onAjouter} />
    </div>
  );
}

export default Accueil;
