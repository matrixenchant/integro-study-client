import React from 'react';
import About from './About';
import Hero from './Hero';
import Services from './Services';
import Header from './header';
import './index.scss';

import delimiter from '../assets/delimiter.png';
import Clients from './Clients';
import Process from './Process';

import decor4 from '../assets/decor4.png';
import Partners from './Partners';

const Landing = () => {
  useEffect(() => {
    document.title = 'Integra Study';
  }, []);

  return (
    <div className="landing">
      <Header />
      <Hero />
      <About />
      <Services />
      <img src={delimiter} alt="" className="delimiter" />
      <Clients />
      <div className="landing-dark">
        <img className="decor4" src={decor4} />
        <DarkHead />
        <Process />
        <Partners />
      </div>
    </div>
  );
};

const DarkHead = () => (
  <svg
    className="dark-head"
    width="1685"
    height="271"
    viewBox="0 0 1685 271"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M318.595 95.4491C116.135 108.505 22.1741 64.2607 0.501023 40.5068L0.233643 270.5H1685V164.535C1666.99 178.497 1558.96 232.533 1451.93 214.037C1419.92 208.506 1371.41 193.91 1300.89 142.776C1240.54 82.756 1101.93 4.60371 922.274 0.25184C802.259 -2.65538 710.385 20.0737 612.221 44.3587C526.707 65.5146 436.419 87.8512 318.595 95.4491Z"
      fill="black"
    />
  </svg>
);

export default Landing;
