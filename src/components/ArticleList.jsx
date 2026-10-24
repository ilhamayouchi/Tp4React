import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <ul className="liste-articles">
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/article/${article.id}`}>{article.titre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
