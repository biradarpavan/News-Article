// src/Pages/Business.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../Components/Article';

const Business = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=e406f5268ff54ac0a46d8e17bb780b79');
        setArticles(response.data.articles || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold my-6 text-center">Business News</h2>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Business;
