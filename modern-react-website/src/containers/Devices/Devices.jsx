import React from 'react';
import devicesImage from '../../assets/444.jpg';
import './Devices.css';

const Devices = () => (
  <div className="devices section-padding" id="devices">
    <div className="devices-image">
      <img src={devicesImage} alt="devices" />
    </div>
    <div className="devices-content">
      <h1 className="gradient__text">Bring The Future <br /> To Your Home.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque nulla, doloremque numquam quod minima doloribus voluptatibus adipisci ipsa nostrum voluptatum incidunt quam ducimus obcaecati saepe at sint ex. Consequuntur nulla tenetur fuga aperiam, quibusdam maiores numquam quasi natus consequatur soluta inventore, accusantium ipsa. Reiciendis ratione quasi doloribus ipsam! Omnis officiis culpa nam illo natus aliquid enim sunt voluptatibus accusamus, in voluptatem, eveniet nostrum? Sequi maiores provident quia ipsa perspiciatis voluptates excepturi consectetur odio quas ab, explicabo nisi obcaecati vero?</p>
      <h4>Get started today!</h4>
    </div>
  </div>
);

export default Devices;
