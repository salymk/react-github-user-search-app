/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

console.log(DateTime.fromISO('2016-08-23T02:31:27Z').toFormat('dd LLL yyyy'));

const UserHeader = (props) => (
  <>
    <div className="user-header">
      <div className="user-header__img">
        <img src={props.img} alt={`${props.name} profile`} />
      </div>
      <div className="user-header__info">
        <div className="name">
          <h2>{props.name}</h2>
          <a
            className="username"
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            @{props.login}
          </a>
        </div>
        <p className="date">{`Joined ${DateTime.fromISO(
          props.created_at
        ).toFormat('dd LLL yyyy')}`}</p>
      </div>
    </div>
  </>
);

export default UserHeader;

UserHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};
