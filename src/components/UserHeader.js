/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ThemeContext from '../contexts/theme';

const UserHeader = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <div className="user-header">
        <div className="user-header__img">
          <img src={props.img} alt={`${props.name} profile`} />
        </div>
        <div className="user-header__info">
          <div className="name">
            <h2 className={theme === 'dark' ? 'dark-mode' : ''}>
              {props.name}
            </h2>
            <a
              className="username"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              @{props.login}
            </a>
          </div>
          <p
            className={`date ${theme === 'dark' ? 'dark-mode' : ''}`}
          >{`Joined ${DateTime.fromISO(props.created_at).toFormat(
            'dd LLL yyyy'
          )}`}</p>
        </div>
      </div>
    </>
  );
};

export default UserHeader;

UserHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};
