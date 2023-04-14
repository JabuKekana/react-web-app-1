import React from 'react';
import Article from '../../components/Article/Article';
import { img1, img2, img3, img4, img5 } from './imports';
import './News.css';

const News = () => (
  <div className="news section-padding" id="news">
    <div className="news-heading">
      <h1 className="gradient__text">Get to know the latest<br /> News and trends updated 24/7!</h1>
    </div>
    <div className="news-container">
      <div className="news-container_groupA">
        <Article imgUrl={img1} date="Dec 21,2022" text="TechWorld is making a difference in these areas!" />
      </div>
      <div className="news-container_groupB">
        <Article imgUrl={img2} date="Dec 21,2022" text="TechWorld is making a difference in these areas!" />
        <Article imgUrl={img3} date="Dec 21,2022" text="TechWorld is making a difference in these areas!" />
        <Article imgUrl={img4} date="Dec 21,2022" text="TechWorld is making a difference in these areas!" />
        <Article imgUrl={img5} date="Dec 21,2022" text="TechWorld is making a difference in these areas!" />
      </div>
    </div>
  </div>
);

export default News;
