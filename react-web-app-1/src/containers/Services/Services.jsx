import React from 'react';
import Features from '../../components/Features/Features';
import './Services.css';

const servicesData = [
  {
    title: 'Web Design',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, fuga, fugit facere ipsa ipsus vitae totam cum repudiandae beatae!',
  },
  {
    title: 'Web Development',
    text: 'Adipisicing elit. Provident, fuga, fugit facere ipsa ipsum quae quia quasi saepe, dolorum quos vitae totam cum repudiandae beatae!',
  },
  {
    title: 'Web Application',
    text: 'Sit amet consectetur adipisicing elit. Provident, fuga, fugit facere ipsa ipsum quae quia quasi saepe, dolorum quos vitae totam cum repudiandae beatae!',
  },
  {
    title: 'Website Upgrades',
    text: 'Provident, fuga, fugit facere ipsa ipsum quae quia quasi saepe, dolorum quos vitae totam cum repudiandae beatae!',
  },
];

const Services = () => (
  <div className="services section-padding" id="services">
    <div className="services-heading">
      <h1 className="gradient__text">Let Us Upgrade & Transform The Look Of Your Business & Help You Have a Unique Presence Online.</h1>
    </div>
    <div className="services-container">
      {servicesData.map((item, index) => (
        <Features title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Services;
