import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

// Navbar Component
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#4299e1', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>NewsApp</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/business" style={{ color: 'white', textDecoration: 'none' }}>Business</Link>
          <Link to="/sports" style={{ color: 'white', textDecoration: 'none' }}>Sports</Link>
          <Link to="/science" style={{ color: 'white', textDecoration: 'none' }}>Science</Link>
          <Link to="/saved" style={{ color: 'white', textDecoration: 'none' }}>Saved Articles</Link>
        </div>
      </div>
    </nav>
  );
};

// Article Component
const Article = ({ article, saveArticle, deleteArticle }) => {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '1rem', margin: '0.5rem', width: '20rem' }}>
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          style={{ width: '100%', height: '10rem', objectFit: 'cover' }} 
        />
      )}
      <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', margin: '0.5rem 0' }}>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', textDecoration: 'none' }}>Read more</a>
      {saveArticle && (
        <button onClick={() => saveArticle(article)} style={{ backgroundColor: '#48bb78', color: 'white', padding: '0.5rem', marginTop: '0.5rem', border: 'none', cursor: 'pointer' }}>
          Save
        </button>
      )}
      {deleteArticle && (
        <button onClick={() => deleteArticle(article._id)} style={{ backgroundColor: '#f56565', color: 'white', padding: '0.5rem', marginTop: '0.5rem', border: 'none', cursor: 'pointer' }}>
          Delete
        </button>
      )}
    </div>
  );
};

// Business Page
const Business = ({ saveArticle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (page) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&apiKey=e406f5268ff54ac0a46d8e17bb780b79`);
      const filteredArticles = response.data.articles.filter(article => article.urlToImage);
      setArticles(prevArticles => [...prevArticles, ...filteredArticles]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles(page);
    setLoading(false);
  }, [page]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0', textAlign: 'center' }}>Business News</h2>
      {error ? (
        <p style={{ color: '#f56565', textAlign: 'center' }}>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {articles.map((article, index) => (
            <Article key={index} article={article} saveArticle={saveArticle} />
          ))}
        </div>
      )}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <button onClick={() => setPage(page + 1)} style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem', backgroundColor: '#4299e1', color: 'white', border: 'none', cursor: 'pointer' }}>
          Load More
        </button>
      )}
    </div>
  );
};

// Sports Page
const Sports = ({ saveArticle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (page) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&page=${page}&apiKey=e406f5268ff54ac0a46d8e17bb780b79`);
      const filteredArticles = response.data.articles.filter(article => article.urlToImage);
      setArticles(prevArticles => [...prevArticles, ...filteredArticles]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles(page);
    setLoading(false);
  }, [page]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0', textAlign: 'center' }}>Sports News</h2>
      {error ? (
        <p style={{ color: '#f56565', textAlign: 'center' }}>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {articles.map((article, index) => (
            <Article key={index} article={article} saveArticle={saveArticle} />
          ))}
        </div>
      )}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <button onClick={() => setPage(page + 1)} style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem', backgroundColor: '#4299e1', color: 'white', border: 'none', cursor: 'pointer' }}>
          Load More
        </button>
      )}
    </div>
  );
};

// Science Page
const Science = ({ saveArticle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (page) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&page=${page}&apiKey=e406f5268ff54ac0a46d8e17bb780b79`);
      const filteredArticles = response.data.articles.filter(article => article.urlToImage);
      setArticles(prevArticles => [...prevArticles, ...filteredArticles]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles(page);
    setLoading(false);
  }, [page]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0', textAlign: 'center' }}>Science News</h2>
      {error ? (
        <p style={{ color: '#f56565', textAlign: 'center' }}>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {articles.map((article, index) => (
            <Article key={index} article={article} saveArticle={saveArticle} />
          ))}
        </div>
      )}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <button onClick={() => setPage(page + 1)} style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem', backgroundColor: '#4299e1', color: 'white', border: 'none', cursor: 'pointer' }}>
          Load More
        </button>
      )}
    </div>
  );
};

// Saved News Page
const SavedNews = ({ savedArticles, deleteArticle }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0', textAlign: 'center' }}>Saved Articles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {savedArticles.map((article) => (
          <Article key={article._id} article={article} deleteArticle={deleteArticle} />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  const saveArticle = async (article) => {
    try {
      const response = await axios.post('http://localhost:5000/api/news', article);
      console.log(response.data); // Log response data
      setSavedArticles([...savedArticles, response.data]);
    } catch (err) {
      console.error('Error saving article:', err); // Log errors
    }
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      setSavedArticles(savedArticles.filter((article) => article._id !== id));
    } catch (err) {
      console.error('Error deleting article:', err); // Log errors
    }
  };

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news');
        setSavedArticles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSavedArticles();
  }, []);

  return (
    <Router>
      <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem' }}>
          <Routes>
            <Route path="/" element={<Business saveArticle={saveArticle} />} />
            <Route path="/business" element={<Business saveArticle={saveArticle} />} />
            <Route path="/sports" element={<Sports saveArticle={saveArticle} />} />
            <Route path="/science" element={<Science saveArticle={saveArticle} />} />
            <Route path="/saved" element={<SavedNews savedArticles={savedArticles} deleteArticle={deleteArticle} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


