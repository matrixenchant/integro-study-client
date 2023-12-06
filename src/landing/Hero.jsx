import React from 'react';

import decor1 from '../assets/decor1.png';
import decor2 from '../assets/decor2.png';
import hero from '../assets/main-hero.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="landing-wrapper">
        <div className="hero-block">
          <div className="hero-title">
            <span className='manrope'>INTEGRA</span>
            <span> - успешный старт и надежная поддержка в бизнес-экосистеме</span>
          </div>
          <button className='main-btn'>Зарегистрироваться</button>
        </div>
      </div>
      <img className="decor1" src={decor1} alt="" />
      <img className="decor2" src={decor2} alt="" />
      <img className="hero-decor" src={hero} alt="" />
    </div>
  );
};

export default Hero;
