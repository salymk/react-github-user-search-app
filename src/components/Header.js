import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';
import MoonIcon from '../icon-components/MoonIcon';
import SunIcon from '../icon-components/SunIcon';

const Header = ({ toggleTheme }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <header className="container header">
      <nav>
        <h1>devfinder</h1>
        <button onClick={toggleTheme} className="toggle-btn" type="button">
          {theme === 'light' ? (
            <div className="dark-icon">
              <p>Dark</p>
              <MoonIcon />
            </div>
          ) : (
            <div className="light-icon">
              <p>Light</p>
              <SunIcon />
            </div>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
