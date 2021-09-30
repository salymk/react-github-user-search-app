/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const UserStats = (props) => (
  <>
    <div className="user-stats">
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

export default UserStats;

UserStats.propTypes = {
  repos: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
};
