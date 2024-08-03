// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=e406f5268ff54ac0a46d8e17bb780b79`);
      setArticles(response.data.articles);
    };

    fetchArticles();
  }, [category]);

  const saveArticle = async (article) => {
    await axios.post('/api/news', article);
  };

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <button onClick={() => saveArticle(article)}>Save</button>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
