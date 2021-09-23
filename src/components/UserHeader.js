import React from 'react';
import placeholderImg from '../assets/salym-profile.jpg';

const UserHeader = () => (
  <>
    <div className="user-header">
      <div className="user-header__img">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <div className="user-header__info">
        <div className="name">
          <h2>The Octocat</h2>
          <a
            className="username"
            href="https://github.com/octocat"
            target="_blank"
            rel="noreferrer"
          >
            @octocat
          </a>
        </div>
        <p className="date">Joined 25 Jan 2011</p>
      </div>
    </div>
  </>
);

export default UserHeader;
