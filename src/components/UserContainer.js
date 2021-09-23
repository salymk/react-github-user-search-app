import React from 'react';
import UserHeader from './UserHeader';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

const UserContainer = () => (
  <div className="user-container">
    <UserHeader />
    <div className="user-content">
      <p className="bio">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <UserStats />
      <UserLinks />
    </div>
  </div>
);

export default UserContainer;
