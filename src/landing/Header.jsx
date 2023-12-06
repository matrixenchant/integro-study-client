import React from 'react';

import logo from '../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="header-logo">
          <img src={logo} alt="INTEGRA" />
        </div>
        <div className="header-links">
          <AnchorLink href="#о-нас">О нас</AnchorLink>
          <AnchorLink href="#услуги">Услуги</AnchorLink>
          <AnchorLink href="#партнеры">Партнеры</AnchorLink>
          <AnchorLink href="#процесс">Процесс</AnchorLink>
          <button className="main-btn">Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
