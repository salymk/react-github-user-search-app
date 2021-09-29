/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import UserHeader from './UserHeader';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

const UserContainer = (props) => (
  <div className="user-container">
    <UserHeader />
    <div className="user-content">
      <p className="bio">{props.bio}</p>

      <UserStats />
      <UserLinks />
    </div>
  </div>
);

export default UserContainer;
