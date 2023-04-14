import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer section-padding" id="footer">
    <div className="footer-heading">
      <h1 className="gradient__text">The Future Awaits</h1>
    </div>

    <div className="footer-btn">
      <p>Get A Quote</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <h1>TechWorld</h1>
        <p>Bringing the future to you.</p>
      </div>
      <div className="footer-links_div">
        <h4>LINKS</h4>
        <p>WhatsApp</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      <div className="footer-links_div">
        <h4>COMPANY</h4>
        <p>Home</p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-links_div">
        <h4>CONTACT US</h4>
        <p>info@techworld.com</p>
        <p>011 123 4567</p>
        <p>123 Street, Greenview, 45 Building</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>  &#169; All rights reserved | 2022 TechWorld</p>
    </div>
  </div>
);

export default Footer;
