import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      {article.urlToImage && (
        <img className="w-full h-48 object-cover" src={article.urlToImage} alt={article.title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Article;
