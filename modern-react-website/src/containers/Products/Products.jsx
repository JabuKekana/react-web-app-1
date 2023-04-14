import React from 'react';
import Feature from '../../components/Features/Features';
import './Products.css';

const Products = () => (
  <div className="products section-margin" id="products">
    <div className="products-feature">
      <Feature title="Our Products" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores unde enim deserunt laboriosam cupiditate, molestiae facere incidunt, ullam, autem repellat rem accusantium. Nihil nemo sed vero! Velit recusandae dolore repudiandae inventore asperiores, odit, explicabo ut voluptas repellendus animi suscipit?" />
    </div>
    <div className="products-heading">
      <h1 className="gradient__text">Technology that exceeds expectations.</h1>
      </div>
    <div className="products-container">
      <Feature title="VR Headset" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, delectus! Doloribus dolorem necessitatibus velit, aliquid qui alias!" />
      <Feature title="TW Watch" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, delectus! Doloribus dolorem necessitatibus velit, aliquid qui alias!" />
      <Feature title="Web Development" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, delectus! Doloribus dolorem necessitatibus velit, aliquid qui alias!" />
    </div>
  </div>
);

export default Products;
