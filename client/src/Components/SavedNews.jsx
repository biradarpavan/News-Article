import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

const SavedNews = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      const response = await axios.get('/api/news');
      setSavedArticles(response.data);
    };
    fetchSavedArticles();
  }, []);

  const deleteArticle = async (id) => {
    await axios.delete(`/api/news/${id}`);
    setSavedArticles(savedArticles.filter(article => article._id !== id));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold my-6 text-center">Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p className="text-center">No saved articles</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {savedArticles.map((article) => (
            <div key={article._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
              <Article article={article} />
              <button onClick={() => deleteArticle(article._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedNews;
