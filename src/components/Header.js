import React from 'react';
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

const Header = () => (
  <header className="container">
    <nav>
      <h1>devfinder</h1>
      <button type="button">
        <p>Dark</p>
        <img src={Moon} alt="Moon" />
      </button>
    </nav>
  </header>
);

export default Header;
