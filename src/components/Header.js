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
        <h1 className={theme === 'dark' ? 'dark-mode' : ''}>devfinder</h1>
        <button
          onClick={toggleTheme}
          className={`toggle-btn ${theme === 'dark' ? 'dark-mode' : ''}`}
          type="button"
          aria-label="Toggle button to change light and dark themes"
        >
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
