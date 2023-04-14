import React from 'react';
import headerImg from '../../assets/950.jpg';
import './Header.css';

const Header = () => (
  <div className="header section-padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Bringing The future to you!</h1>
      <p>Welcome to the World of Technology & Endless Possibilities! Wether you are looking for IT services or modern devices, we are here for you.</p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content">
        <p>See The World like Never Before!..</p>
      </div>
    </div>

    <div className="header-image">
      <img src={headerImg} alt="HeaderImage" />
    </div>
  </div>
);

export default Header;
