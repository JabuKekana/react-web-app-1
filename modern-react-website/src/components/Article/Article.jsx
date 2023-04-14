import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="article-container_article">
    <div className="article-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="article-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
