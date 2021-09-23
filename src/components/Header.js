import React from 'react';
import MoonIcon from '../icon-components/MoonIcon';

const Header = () => (
  <header className="container">
    <nav>
      <h1>devfinder</h1>
      <button className="toggle-btn" type="button">
        <p>Dark</p>
        <MoonIcon fill="red" />
      </button>
    </nav>
  </header>
);

export default Header;
