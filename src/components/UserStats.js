/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';

const UserStats = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <div className={`user-stats ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <ul>
          <li>
            <p>Repos</p>
            <h3>{props.repos}</h3>
          </li>
          <li>
            <p>Followers</p>
            <h3>{props.followers}</h3>
          </li>
          <li>
            <p>Following</p>
            <h3>{props.following}</h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserStats;

UserStats.propTypes = {
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};
