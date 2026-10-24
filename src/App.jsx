import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Article from './pages/Article';
import './App.css';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, titre: 'Découvrir React', contenu: 'React est une bibliothèque JavaScript...' },
    { id: 2, titre: 'Le Routing avec React Router', contenu: 'React Router permet de naviguer...' }
  ]);

  const ajouterArticle = (nouvelArticle) => {
    setArticles([...articles, nouvelArticle]);
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/" element={<Accueil articles={articles} onAjouter={ajouterArticle} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
